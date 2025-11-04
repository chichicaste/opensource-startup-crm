import bcrypt from 'bcryptjs';
import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	// Check if user is already authenticated
	const sessionId = cookies.get('session');
	if (sessionId) {
		const user = await prisma.user.findUnique({
			where: { session_id: sessionId }
		});

		if (user) {
			throw redirect(307, '/org');
		}
	}

	return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString().trim();
		const email = formData.get('email')?.toString().trim().toLowerCase();
		const password = formData.get('password')?.toString();
		const confirmPassword = formData.get('confirmPassword')?.toString();

		// Validation
		if (!name || !email || !password || !confirmPassword) {
			return fail(400, {
				error: 'All fields are required',
				values: { name, email }
			});
		}

		if (password !== confirmPassword) {
			return fail(400, {
				error: 'Passwords do not match',
				values: { name, email }
			});
		}

		if (password.length < 8) {
			return fail(400, {
				error: 'Password must be at least 8 characters long',
				values: { name, email }
			});
		}

		// Check if user already exists
		const existingUser = await prisma.user.findUnique({
			where: { email }
		});

		if (existingUser) {
			return fail(400, {
				error: 'User with this email already exists',
				values: { name, email }
			});
		}

		try {
			// Hash password
			const hashedPassword = await bcrypt.hash(password, 12);

			// Create user
			const session_id = uuidv4();
			await prisma.user.create({
				data: {
					email,
					name,
					password: hashedPassword,
					user_id: uuidv4(),
					session_id,
					isActive: true
				}
			});

			// Set session cookie
			cookies.set('session', session_id, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: request.url.startsWith('https://'),
				maxAge: 60 * 60 * 24 * 7 // one week
			});
		} catch (error) {
			console.error('Registration error:', error);
			return fail(500, {
				error: 'An error occurred during registration',
				values: { name, email }
			});
		}

		throw redirect(307, '/org');
	}
};