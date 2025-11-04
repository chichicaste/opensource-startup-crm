<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import '../../app.css';
	import '../../lib/i18n.js';
	import logo from '$lib/assets/images/logo.png';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import {
		Menu,
		X,
		ArrowRight,
		CheckSquare,
		DollarSign,
		Video,
		Edit,
		MessageCircle,
		Github,
		Twitter,
		Linkedin
	} from '@lucide/svelte';
	import { enhance } from '$app/forms';

	let isMenuOpen = false;
	let scrollY = 0;
	/** @type {HTMLFormElement} */
	let newsletterForm;
	/** @type {string} */
	let newsletterMessage = '';
	let showNewsletterMessage = false;

	// Toggle mobile menu
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Close mobile menu when route changes
	$: if (page.url.pathname) {
		isMenuOpen = false;
	}

	// Handle scroll for navbar transparency
	$: navbarClass =
		scrollY > 10
			? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
			: 'bg-white/80 backdrop-blur-sm shadow-md';

	onMount(() => {
		const handleScroll = () => (scrollY = window.scrollY);
		window.addEventListener('scroll', handleScroll);

		// Close mobile menu when clicking outside
		/**
		 * @param {Event} event
		 */
		const handleClickOutside = (event) => {
			const nav = document.querySelector('nav');
			if (isMenuOpen && nav && !nav.contains(/** @type {Node} */ (event.target))) {
				isMenuOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.png" type="image/png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#2563EB" />
	<meta name="msapplication-TileColor" content="#2563EB" />

	<!-- Enhanced SEO Meta Tags -->
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="language" content="English" />
	<meta name="author" content="MicroPyramid" />
	<link rel="canonical" href="https://bottlecrm.io{page.url.pathname}" />

	<!-- Enhanced Open Graph -->
	<meta property="og:site_name" content="BottleCRM" />
	<meta property="og:locale" content="en_US" />

	<!-- Enhanced Twitter Cards -->
	<meta name="twitter:site" content="@micropyramid" />
	<meta name="twitter:creator" content="@micropyramid" />

	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://github.com" />
</svelte:head>

<div class="flex min-h-screen flex-col overflow-x-hidden bg-gray-50">
	<!-- Enhanced Navigation -->
	<nav class="fixed top-0 z-50 w-full transition-all duration-300 {navbarClass}">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<!-- Logo Section -->
				<div class="flex flex-shrink-0 items-center">
					<a href="/" class="group flex items-center" aria-label="BottleCRM Homepage">
						<div class="relative">
							<img
								src={logo}
								alt="BottleCRM Logo"
								class="h-7 w-7 transition-opacity duration-200 group-hover:opacity-90 sm:h-8 sm:w-8"
							/>
							<div
								class="absolute -top-1 -right-1 h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 sm:h-3 sm:w-3"
							></div>
						</div>
						<span
							class="ml-2 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-xl"
							>BottleCRM</span
						>
						<span
							class="xs:block ml-2 hidden rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
							>FREE</span
						>
					</a>
				</div>

				<!-- Desktop Navigation - Hidden on smaller screens -->
				<div class="hidden items-center space-x-1 xl:flex">
					<a
						href="/features"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Features</a
					>
					<a
						href="/pricing"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Pricing</a
					>
					<a
						href="https://www.youtube.com/@bottlecrm"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Live Demo</a
					>
					<a
						href="/blog"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Blog</a
					>
					<a
						href="/contact"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Support</a
					>

					<!-- GitHub Star Button -->
					<a
						href="https://github.com/MicroPyramid/opensource-startup-crm"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900"
						aria-label="Star BottleCRM on GitHub"
					>
						<Github class="mr-1 h-4 w-4" />
					</a>

					<div class="mx-2 h-6 w-px bg-gray-300"></div>

					<LanguageSwitcher />

					<a
						href="/login"
						class="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Login</a
					>
					<a
						href="/login"
						class="inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl lg:px-6"
					>
						Start Free
						<ArrowRight class="ml-2 h-4 w-4" />
					</a>
				</div>

				<!-- Tablet Navigation - Shows limited items -->
				<div class="hidden items-center space-x-2 lg:flex xl:hidden">
					<a
						href="https://www.youtube.com/@bottlecrm"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Demo</a
					>
					<a
						href="/login"
						class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
						>Login</a
					>
					<a
						href="/signup"
						class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
						>Sign Up</a
					>

					<button
						onclick={toggleMenu}
						class="ml-2 inline-flex items-center justify-center rounded-lg p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						aria-label="Toggle navigation menu"
					>
						{#if isMenuOpen}
							<X class="h-5 w-5" />
						{:else}
							<Menu class="h-5 w-5" />
						{/if}
					</button>
				</div>

				<!-- Mobile Navigation Controls -->
				<div class="flex items-center space-x-2 lg:hidden">
					<!-- Mobile Quick Actions -->
					<div class="hidden items-center space-x-2 sm:flex">
						<a
							href="/login"
							class="px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
							>Login</a
						>
						<a
							href="/signup"
							class="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
						>
							Sign Up
						</a>
					</div>

					<!-- Hamburger Menu Button -->
					<button
						onclick={toggleMenu}
						class="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none active:bg-gray-200"
						aria-label="Toggle navigation menu"
						aria-expanded={isMenuOpen}
					>
						{#if isMenuOpen}
							<X class="h-6 w-6" />
						{:else}
							<Menu class="h-6 w-6" />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Enhanced Mobile & Tablet Menu -->
		{#if isMenuOpen}
			<div
				class="animate-in slide-in-from-top-5 border-t border-gray-200/60 bg-white/98 shadow-2xl backdrop-blur-xl duration-200 xl:hidden"
			>
				<div class="max-h-[calc(100vh-4rem)] space-y-2 overflow-y-auto px-4 pt-4 pb-6">
					<!-- Navigation Links -->
					<div class="space-y-1">
						<a
							href="/features"
							class="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
						>
							<CheckSquare class="mr-3 h-5 w-5 text-blue-500" />
							Features
						</a>
						<a
							href="/pricing"
							class="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
						>
							<DollarSign class="mr-3 h-5 w-5 text-green-500" />
							<span class="flex-1">Pricing</span>
							<span class="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
								>Free</span
							>
						</a>
						<a
							href="https://www.youtube.com/@bottlecrm"
							class="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
						>
							<Video class="mr-3 h-5 w-5 text-purple-500" />
							Live Demo
						</a>
						<a
							href="/blog"
							class="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
						>
							<Edit class="mr-3 h-5 w-5 text-red-500" />
							Blog
						</a>
						<a
							href="/contact"
							class="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
						>
							<MessageCircle class="mr-3 h-5 w-5 text-indigo-500" />
							Support
						</a>
					</div>

					<!-- GitHub Link -->
					<div class="pt-2">
						<a
							href="https://github.com/MicroPyramid/svelte-crm"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100"
						>
							<Github class="mr-3 h-5 w-5" />
							<span class="flex-1">GitHub Repository</span>
							<span class="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
								>★ 1K+</span
							>
						</a>
					</div>

					<!-- Mobile Auth Buttons -->
					<div class="space-y-3 border-t border-gray-200 pt-4 sm:hidden">
						<a
							href="/login"
							class="block w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-center text-base font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 active:bg-gray-100"
						>
							Sign In
						</a>
						<a
							href="/signup"
							class="block w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-center text-base font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900"
						>
							Start Free Trial
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Page content with top padding for fixed nav -->
	<main class="flex-grow pt-16">
		<slot />
	</main>

	<!-- Enhanced Footer with better SEO -->
	<footer class="bg-gray-900 text-gray-300">
		<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<!-- Newsletter signup -->
			<div class="mb-12 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8">
				<div class="text-center">
					<h3 class="mb-4 text-2xl font-bold text-white">Stay Updated with BottleCRM</h3>
					<p class="mx-auto mb-6 max-w-2xl text-blue-100">
						Get the latest updates on new features, best practices, and CRM tips delivered to your
						inbox.
					</p>
					<form
						method="POST"
						action="/?/subscribe"
						class="mx-auto max-w-md"
						use:enhance={({ submitter }) => {
							if (submitter) /** @type {HTMLButtonElement} */ (submitter).disabled = true;
							return async ({ result, update }) => {
								if (result.type === 'success') {
									newsletterMessage =
										/** @type {string} */ (result.data?.message) ||
										'Successfully subscribed to newsletter!';
									showNewsletterMessage = true;
									newsletterForm.reset();
									setTimeout(() => {
										showNewsletterMessage = false;
									}, 5000);
								} else if (result.type === 'failure') {
									newsletterMessage =
										/** @type {string} */ (result.data?.message) ||
										'Failed to subscribe. Please try again.';
									showNewsletterMessage = true;
									setTimeout(() => {
										showNewsletterMessage = false;
									}, 5000);
								}
								if (submitter) /** @type {HTMLButtonElement} */ (submitter).disabled = false;
								await update();
							};
						}}
						bind:this={newsletterForm}
					>
						{#if showNewsletterMessage}
							<div
								class="mb-4 rounded-lg p-3 {newsletterMessage.includes('Success')
									? 'bg-green-100 text-green-800'
									: 'bg-red-100 text-red-800'} text-sm"
							>
								{newsletterMessage}
							</div>
						{/if}
						<div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
							<label for="newsletter-email" class="sr-only">Enter your email address</label>
							<input
								id="newsletter-email"
								type="email"
								name="email"
								placeholder="Enter your email"
								required
								class="flex-1 rounded-lg border-0 px-4 py-3 focus:ring-2 focus:ring-white/50 focus:outline-none"
							/>
							<button
								type="submit"
								class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-gray-100 disabled:opacity-50"
							>
								Subscribe Free
							</button>
						</div>
					</form>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
				<!-- Company Info -->
				<div class="lg:col-span-2">
					<div class="mb-4 flex items-center">
						<img src={logo} alt="BottleCRM Logo" class="mr-3 h-8 w-8" />
						<span class="text-xl font-bold text-white">BottleCRM</span>
					</div>
					<p class="mb-6 leading-relaxed text-gray-400">
						The only CRM you'll ever need - completely free, open-source, and designed for startups.
						Build better customer relationships without breaking the bank.
					</p>

					<!-- Social Links -->
					<div class="flex space-x-4">
						<a
							href="https://github.com/MicroPyramid/opensource-startup-crm"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg bg-gray-800 p-2 transition-colors duration-200 hover:bg-gray-700"
							aria-label="GitHub"
						>
							<Github class="h-5 w-5" />
						</a>
						<a
							href="https://x.com/micropyramid"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg bg-gray-800 p-2 transition-colors duration-200 hover:bg-gray-700"
							aria-label="Twitter"
						>
							<Twitter class="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com/company/micropyramid"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg bg-gray-800 p-2 transition-colors duration-200 hover:bg-gray-700"
							aria-label="LinkedIn"
						>
							<Linkedin class="h-5 w-5" />
						</a>
					</div>
				</div>

				<!-- Enhanced footer columns with SEO-friendly content -->
				<div>
					<h3 class="mb-4 text-lg font-semibold text-white">CRM Solutions</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a
								href="/features/contact-management"
								class="transition-colors duration-200 hover:text-white">Contact Management</a
							>
						</li>
						<li>
							<a
								href="/features/lead-management"
								class="transition-colors duration-200 hover:text-white">Lead Management</a
							>
						</li>
						<li>
							<a
								href="/features/account-management"
								class="transition-colors duration-200 hover:text-white">Account Management</a
							>
						</li>
						<li>
							<a
								href="/features/sales-pipeline"
								class="transition-colors duration-200 hover:text-white">Sales Pipeline</a
							>
						</li>
						<li>
							<a
								href="/features/analytics"
								class="inline-flex items-center transition-colors duration-200 hover:text-white"
							>
								Analytics & Reports
								<span
									class="ml-2 rounded-full bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800"
									>Coming Soon</span
								>
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 text-lg font-semibold text-white">Resources</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a href="/blog" class="transition-colors duration-200 hover:text-white">CRM Blog</a>
						</li>
						<li>
							<a
								href="/documentation"
								class="inline-flex items-center transition-colors duration-200 hover:text-white"
							>
								Documentation
								<span
									class="ml-2 rounded-full bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800"
									>Coming Soon</span
								>
							</a>
						</li>
						<li>
							<a
								href="/tutorials"
								class="inline-flex items-center transition-colors duration-200 hover:text-white"
							>
								Video Tutorials
								<span
									class="ml-2 rounded-full bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800"
									>Coming Soon</span
								>
							</a>
						</li>
						<li>
							<a
								href="/api-docs"
								class="inline-flex items-center transition-colors duration-200 hover:text-white"
							>
								API Documentation
								<span
									class="ml-2 rounded-full bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800"
									>Coming Soon</span
								>
							</a>
						</li>
						<li>
							<a
								href="/case-studies"
								class="inline-flex items-center transition-colors duration-200 hover:text-white"
							>
								Case Studies
								<span
									class="ml-2 rounded-full bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800"
									>Coming Soon</span
								>
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 text-lg font-semibold text-white">Support</h3>
					<ul class="space-y-3 text-sm">
						<li>
							<a href="/contact" class="transition-colors duration-200 hover:text-white"
								>Contact Support</a
							>
						</li>
						<li><a href="/faq" class="transition-colors duration-200 hover:text-white">FAQ</a></li>
						<li>
							<a
								href="/hosting-services"
								class="inline-flex items-center transition-colors duration-200 hover:text-white"
							>
								Hosting Services
								<span
									class="ml-2 rounded-full bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800"
									>Coming Soon</span
								>
							</a>
						</li>
						<li>
							<a href="/customization" class="transition-colors duration-200 hover:text-white"
								>Custom Development</a
							>
						</li>
						<li>
							<a href="/migration" class="transition-colors duration-200 hover:text-white"
								>CRM Migration</a
							>
						</li>
					</ul>
				</div>
			</div>

			<!-- Bottom footer -->
			<div class="mt-12 border-t border-gray-800 pt-8">
				<div class="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
					<div class="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
						<p class="text-sm text-gray-400">
							© {new Date().getFullYear()} BottleCRM by
							<a
								href="https://micropyramid.com"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-400 hover:text-blue-300">MicroPyramid</a
							>. Open Source & Free Forever.
						</p>
						<div class="flex space-x-4 text-sm">
							<a
								href="/privacy-policy"
								class="text-gray-400 transition-colors duration-200 hover:text-white">Privacy</a
							>
							<a
								href="/terms-of-service"
								class="text-gray-400 transition-colors duration-200 hover:text-white">Terms</a
							>
							<a
								href="/sitemap.xml"
								class="text-gray-400 transition-colors duration-200 hover:text-white">Sitemap</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
