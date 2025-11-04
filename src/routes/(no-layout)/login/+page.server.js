import axios from 'axios';
import bcrypt from 'bcryptjs';
import prisma from '$lib/prisma';

import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

import { v4 as uuidv4 } from 'uuid';

/**
 * @param {Object} params - OAuth parameters
 * @param {string} params.access_token - Access token
 */
async function fetchUserData(params) {
	const url = 'https://www.googleapis.com/oauth2/v1/userinfo';

	// console.log('access token', params)
	try {
		const response = await axios.get(url, {
			params,
			headers: {},
			timeout: 60000 // timeout in milliseconds
		});
		return response.data;
	} catch (error) {
		console.error('Error:', error);
	}
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies }) {
	const code = url.searchParams.get('code');
	const redirect_uri = env.GOOGLE_LOGIN_DOMAIN + '/login';

	// Check if the user is already authenticated
	if (code != null) {
		const tokenParams = {
			grant_type: 'authorization_code',
			code,
			redirect_uri,
			client_id: env.GOOGLE_CLIENT_ID,
			client_secret: env.GOOGLE_CLIENT_SECRET
		};
		let info;

		try {
			const response = await axios.post('https://accounts.google.com/o/oauth2/token', tokenParams);
			info = response.data;
		} catch (error) {
			console.error('Error:', error);
		}

		const user_info = await fetchUserData({ access_token: info.access_token });

		const session_id = uuidv4();

		await prisma.user.upsert({
			where: { email: user_info.email },
			update: {
				session_id: session_id,
				profilePhoto: user_info.picture,
				lastLogin: new Date()
			},
			create: {
				email: user_info.email,
				name: user_info.name,
				profilePhoto: user_info.picture,
				user_id: user_info.id,
				session_id: session_id
			}
		});

		await cookies.set('session', session_id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: url.protocol === 'https:',
			maxAge: 60 * 60 * 24 * 7 // one week
		});

		throw redirect(307, '/bounce');
	}

	// Check for existing session
	const sessionId = cookies.get('session');
	if (sessionId) {
		const user = await prisma.user.findUnique({
			where: { session_id: sessionId }
		});

		if (user) {
			throw redirect(307, '/org');
		}
	}

	const google_login_url =
		'https://accounts.google.com/o/oauth2/auth?client_id=' +
		env.GOOGLE_CLIENT_ID +
		'&response_type=code' +
		'&scope=https://www.googleapis.com/auth/userinfo.profile ' +
		'https://www.googleapis.com/auth/userinfo.email' +
		'&redirect_uri=' +
		redirect_uri +
		'&state=google';

	return { google_url: google_login_url };
}

/** @type {import('./$types').Actions} */
export const actions = {
	google: async () => {
		const redirect_uri = env.GOOGLE_LOGIN_DOMAIN + '/login';

		const google_login_url =
			'https://accounts.google.com/o/oauth2/auth?client_id=' +
			env.GOOGLE_CLIENT_ID +
			'&response_type=code' +
			'&scope=https://www.googleapis.com/auth/userinfo.profile ' +
			'https://www.googleapis.com/auth/userinfo.email' +
			'&redirect_uri=' +
			redirect_uri +
			'&state=google';

		throw redirect(302, google_login_url);
	},
	login: async ({ request, cookies, url }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString().trim().toLowerCase();
		const password = formData.get('password')?.toString();

		if (!email || !password) {
			return {
				error: 'Email and password are required',
				values: { email }
			};
		}

		// Find user by email
		const user = await prisma.user.findUnique({
			where: { email }
		});

		if (!user) {
			return {
				error: 'Invalid email or password',
				values: { email }
			};
		}

		// Allow flexible login: users can use either method
		// If user has password, allow traditional login
		// If user has no password (Google OAuth only), redirect to Google
		// But for now, let's allow all users to try traditional login if they have a password
		if (!user.password) {
			return {
				error: 'This account uses Google OAuth. Please sign in with Google.',
				values: { email }
			};
		}

		// Verify password
		let isValidPassword;
		try {
			isValidPassword = await bcrypt.compare(password, user.password);
		} catch (error) {
			console.error('Password comparison error:', error);
			return {
				error: 'Invalid email or password',
				values: { email }
			};
		}
		if (!isValidPassword) {
			return {
				error: 'Invalid email or password',
				values: { email }
			};
		}

		// Create session
		const session_id = uuidv4();
		await prisma.user.update({
			where: { id: user.id },
			data: {
				session_id,
				lastLogin: new Date()
			}
		});

		await cookies.set('session', session_id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: url.protocol === 'https:',
			maxAge: 60 * 60 * 24 * 7 // one week
		});

		throw redirect(307, '/bounce');
	}
};
