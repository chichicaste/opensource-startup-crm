<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { Building2, User, Mail, Lock, Check, AlertCircle } from '@lucide/svelte';

	export let form; // Contains form data and errors

	// Handle form submission success
	$: if (form?.data) {
		// Redirect after successful registration
		goto('/org');
	}
</script>

<svelte:head>
	<title>Register | BottleCRM - Free Open-Source CRM</title>
	<meta
		name="description"
		content="Create your free BottleCRM account. No credit card required, unlimited users, self-hosted CRM solution."
	/>
</svelte:head>

<div class="min-h-screen bg-gray-50 px-4 py-8">
	<div class="mx-auto max-w-md">
		<!-- Header -->
		<div class="mb-8 text-center">
			<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
				<Building2 class="h-8 w-8 text-blue-600" />
			</div>
			<h1 class="mb-2 text-3xl font-bold text-gray-900">Create Account</h1>
			<p class="text-gray-600">Join BottleCRM - Free CRM for startups and small businesses</p>
		</div>

		<!-- Registration Form -->
		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
			<form action="/register" method="POST" use:enhance class="space-y-6">
				<!-- Name Field -->
				<div class="space-y-2">
					<label for="name" class="block text-sm font-medium text-gray-700">
						Full Name
					</label>
					<div class="relative">
						<input
							type="text"
							id="name"
							name="name"
							required
							value={form?.values?.name || ''}
							class="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 pl-11 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-200 ring-inset placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="Enter your full name"
						/>
						<User class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				<!-- Email Field -->
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium text-gray-700">
						Email Address
					</label>
					<div class="relative">
						<input
							type="email"
							id="email"
							name="email"
							required
							value={form?.values?.email || ''}
							class="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 pl-11 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-200 ring-inset placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="Enter your email"
						/>
						<Mail class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				<!-- Password Field -->
				<div class="space-y-2">
					<label for="password" class="block text-sm font-medium text-gray-700">
						Password
					</label>
					<div class="relative">
						<input
							type="password"
							id="password"
							name="password"
							required
							minlength="8"
							class="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 pl-11 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-200 ring-inset placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="Create a password (min 8 characters)"
						/>
						<Lock class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				<!-- Confirm Password Field -->
				<div class="space-y-2">
					<label for="confirmPassword" class="block text-sm font-medium text-gray-700">
						Confirm Password
					</label>
					<div class="relative">
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							required
							class="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 pl-11 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-200 ring-inset placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							placeholder="Confirm your password"
						/>
						<Lock class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				<!-- Error Message -->
				{#if form?.error}
					<div class="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-4">
						<AlertCircle class="h-5 w-5 flex-shrink-0 text-red-500" />
						<span class="text-sm text-red-700">{form.error}</span>
					</div>
				{/if}

				<!-- Submit Button -->
				<button
					type="submit"
					class="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Create Account
				</button>

				<!-- Login Link -->
				<div class="text-center">
					<span class="text-sm text-gray-600">Already have an account? </span>
					<a
						href="/login"
						class="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
					>
						Sign in
					</a>
				</div>
			</form>
		</div>

		<!-- Footer -->
		<div class="mt-8 text-center">
			<p class="text-sm text-gray-500">
				By creating an account, you agree to our
				<a href="/terms-of-service" class="text-blue-600 hover:text-blue-700">Terms of Service</a>
				and
				<a href="/privacy-policy" class="text-blue-600 hover:text-blue-700">Privacy Policy</a>
			</p>
		</div>
	</div>
</div>