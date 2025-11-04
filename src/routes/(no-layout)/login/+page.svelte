<script>
	import { enhance } from '$app/forms';
	import { Building2, User, Mail, Lock, AlertCircle, Github } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	export let form; // Contains form data and errors

	// Handle form submission success
	$: if (form?.data) {
		// Redirect after successful login
		window.location.href = '/org';
	}
</script>

<svelte:head>
	<title>{$_('auth.pageTitle')}</title>
	<meta
		name="description"
		content={$_('auth.metaDescription')}
	/>
</svelte:head>

<div class="min-h-screen bg-gray-50 px-4 py-8">
	<div class="mx-auto max-w-md">
		<!-- Language Switcher -->
		<div class="mb-4 flex justify-end">
			<LanguageSwitcher />
		</div>

		<!-- Header -->
		<div class="mb-8 text-center">
			<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
				<Building2 class="h-8 w-8 text-blue-600" />
			</div>
			<h1 class="mb-2 text-3xl font-bold text-gray-900">{$_('auth.welcomeBack')}</h1>
			<p class="text-gray-600">{$_('auth.signInToAccount')}</p>
		</div>

		<!-- Login Form -->
		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
			<form action="/login?/login" method="POST" use:enhance class="space-y-6">
				<!-- Email Field -->
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium text-gray-700">
						{$_('auth.emailAddress')}
					</label>
					<div class="relative">
						<input
							type="email"
							id="email"
							name="email"
							required
							value={form?.values?.email || ''}
							class="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 pl-11 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-200 ring-inset placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							placeholder={$_('auth.enterEmail')}
						/>
						<Mail class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
					</div>
				</div>

				<!-- Password Field -->
				<div class="space-y-2">
					<label for="password" class="block text-sm font-medium text-gray-700">
						{$_('auth.password')}
					</label>
					<div class="relative">
						<input
							type="password"
							id="password"
							name="password"
							required
							class="block w-full rounded-xl border-0 bg-gray-50 px-4 py-3 pl-11 text-gray-900 shadow-sm ring-1 ring-gray-300 transition-all duration-200 ring-inset placeholder:text-gray-400 hover:ring-gray-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							placeholder={$_('auth.enterPassword')}
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
					{$_('auth.signIn')}
				</button>
			</form>

			<!-- Divider -->
			<div class="relative my-6">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-300"></div>
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="bg-white px-2 text-gray-500">{$_('auth.orContinueWith')}</span>
				</div>
			</div>

			<!-- Google Sign In Button -->
			<form action="/login?/google" method="POST" use:enhance class="space-y-4">
				<button
					type="submit"
					class="group relative flex w-full transform items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-gray-200 bg-white px-6 py-4 font-semibold text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl focus:ring-4 focus:ring-blue-200 focus:outline-none"
				>
					<!-- Button Background Effect -->
					<div
						class="absolute inset-0 translate-x-[-100%] transform bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 transition-transform duration-1000 group-hover:translate-x-[100%]"
					></div>

					<img
						src="/google.svg"
						alt="Google"
						class="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
					/>
					<span class="relative z-10">{$_('auth.continueWithGoogle')}</span>
				</button>
			</form>

			<!-- Register Link -->
			<div class="mt-6 text-center">
				<span class="text-sm text-gray-600">{$_('auth.dontHaveAccount')} </span>
				<a
					href="/register"
					class="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
				>
					{$_('auth.createOne')}
				</a>
			</div>
		</div>

		<!-- Footer -->
		<div class="mt-8 text-center">
			<p class="text-sm text-gray-500">
				{$_('auth.agreeToTerms')}
				<a href="/terms-of-service" class="text-blue-600 hover:text-blue-700">{$_('auth.termsOfService')}</a>
				{$_('auth.and')}
				<a href="/privacy-policy" class="text-blue-600 hover:text-blue-700">{$_('auth.privacyPolicy')}</a>
			</p>
		</div>
	</div>
</div>
