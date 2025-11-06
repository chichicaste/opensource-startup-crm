<!-- contact page -->
<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import {
		MessageCircle,
		Mail,
		Clock,
		Send,
		Check,
		Star,
		HeadphonesIcon,
		Settings,
		Zap,
		Code,
		Server,
		Users,
		Shield,
		AlertCircle,
		Github,
		Download
	} from '@lucide/svelte';

	// Form data - now handled by server
	let formData = {
		name: '',
		email: '',
		serviceType: '',
		message: ''
	};

	// Form state
	let isSubmitting = false;
	let mounted = false;

	// Get form data from server response
	export let form;

	// Update formData if server returns validation errors
	$: if (form && !form.success) {
		formData = {
			name: form.name || '',
			email: form.email || '',
			serviceType: form.serviceType || '',
			message: form.message || ''
		};
	}

	// Reset form on successful submission
	$: if (form?.success) {
		formData = {
			name: '',
			email: '',
			serviceType: '',
			message: ''
		};
	}

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Contact BottleCRM | Free CRM & Professional Services</title>
	<meta
		name="description"
		content="Contact BottleCRM for free CRM software, setup, hosting, customization, and expert support. Get started or request professional CRM services today."
	/>
	<meta
		name="keywords"
		content="free crm, open source crm, bottlecrm, crm setup, crm hosting, crm customization, crm support, crm development, crm training"
	/>
	<link rel="canonical" href="https://bottlecrm.io/contact" />

	<!-- Open Graph -->
	<meta property="og:title" content="Contact BottleCRM | Free CRM & Professional Services" />
	<meta
		property="og:description"
		content="Contact BottleCRM for free CRM software, setup, hosting, customization, and expert support. Get started or request professional CRM services today."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bottlecrm.io/contact" />
	<meta property="og:image" content="https://bottlecrm.io/og-image.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contact BottleCRM | Free CRM & Professional Services" />
	<meta
		name="twitter:description"
		content="Contact BottleCRM for free CRM software, setup, hosting, customization, and expert support. Get started or request professional CRM services today."
	/>
	<meta name="twitter:image" content="https://bottlecrm.io/og-image.png" />

	<!-- Organization & Contact Schema -->
	{@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BottleCRM",
      "url": "https://bottlecrm.io",
      "logo": "https://bottlecrm.io/logo.png",
      "contactPoint": [{
        "@type": "ContactPoint",
        "email": "bottlecrm@micropyramid.com",
        "contactType": "customer support",
        "areaServed": "Global",
        "availableLanguage": ["English"]
      }]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact BottleCRM",
      "description": "Contact BottleCRM for free CRM software, setup, hosting, customization, and expert support.",
      "url": "https://bottlecrm.io/contact"
    }
    </script>
  `}
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<div
				class="mb-6 inline-flex items-center rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white"
			>
				<MessageCircle class="mr-2 h-4 w-4" />
				Free Software • Professional Support Available
			</div>

			<h1 class="mb-6 text-4xl font-extrabold md:text-6xl">
				Get Expert Help with <span class="text-green-300">BottleCRM</span>
			</h1>

			<p class="mb-8 text-xl leading-relaxed text-blue-100 md:text-2xl">
				The software is free forever. Get professional setup, hosting, customization, and training
				services to accelerate your CRM implementation and maximize your ROI.
			</p>

			<div class="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-3">
				<div class="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
					<MessageCircle class="mx-auto mb-2 h-8 w-8 text-green-300" />
					<div class="text-sm font-medium">Free Community Support</div>
					<div class="text-xs text-blue-200">GitHub</div>
				</div>
				<div class="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
					<HeadphonesIcon class="mx-auto mb-2 h-8 w-8 text-yellow-300" />
					<div class="text-sm font-medium">Professional Setup</div>
					<div class="text-xs text-blue-200">Starting at $197</div>
				</div>
				<div class="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
					<Code class="mx-auto mb-2 h-8 w-8 text-purple-300" />
					<div class="text-sm font-medium">Custom Development</div>
					<div class="text-xs text-blue-200">Bespoke solutions</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Quick Contact Options -->
<section class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-extrabold text-gray-900">Choose Your Support Level</h2>
			<p class="text-xl text-gray-600">
				From free community help to enterprise-grade professional services
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#if mounted}
				<div
					in:fly={{ y: 30, duration: 600, delay: 0 }}
					class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
				>
					<div class="mb-6 text-center">
						<div class="mb-4">
							<MessageCircle class="mx-auto h-10 w-10 text-blue-600" />
						</div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Free Community Support</h3>
						<p class="mb-3 text-sm text-gray-600">Get help from our community and documentation</p>
						<div class="text-2xl font-bold text-blue-600">Free</div>
					</div>

					<ul class="mb-6 space-y-2">
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Community forum access
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Documentation & guides
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							GitHub issue support
						</li>
					</ul>

					<button
						onclick={() => (formData.serviceType = 'free-support')}
						class="w-full rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200"
					>
						Select This Service
					</button>
				</div>

				<div
					in:fly={{ y: 30, duration: 600, delay: 100 }}
					class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg ring-2 ring-blue-500 transition-all duration-300 hover:shadow-xl"
				>
					<div class="absolute -top-3 left-1/2 -translate-x-1/2 transform">
						<span
							class="inline-flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white"
						>
							<Star class="mr-1 h-3 w-3" />
							Most Popular
						</span>
					</div>

					<div class="mb-6 text-center">
						<div class="mb-4">
							<HeadphonesIcon class="mx-auto h-10 w-10 text-blue-600" />
						</div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Professional Setup & Installation</h3>
						<p class="mb-3 text-sm text-gray-600">
							Expert installation, configuration, and basic customization
						</p>
						<div class="text-2xl font-bold text-blue-600">$197 one-time</div>
					</div>

					<ul class="mb-6 space-y-2">
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Professional installation
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							SSL & domain setup
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Basic customization
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							1-month support
						</li>
					</ul>

					<button
						onclick={() => (formData.serviceType = 'professional-setup')}
						class="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
					>
						Select This Service
					</button>
				</div>

				<div
					in:fly={{ y: 30, duration: 600, delay: 200 }}
					class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
				>
					<div class="mb-6 text-center">
						<div class="mb-4">
							<Settings class="mx-auto h-10 w-10 text-blue-600" />
						</div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Enterprise Setup & Customization</h3>
						<p class="mb-3 text-sm text-gray-600">
							Complete enterprise deployment with advanced features
						</p>
						<div class="text-2xl font-bold text-blue-600">$497 one-time</div>
					</div>

					<ul class="mb-6 space-y-2">
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Advanced customization
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Third-party integrations
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Team training
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							3-month support
						</li>
					</ul>

					<button
						onclick={() => (formData.serviceType = 'enterprise-setup')}
						class="w-full rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200"
					>
						Select This Service
					</button>
				</div>

				<div
					in:fly={{ y: 30, duration: 600, delay: 300 }}
					class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
				>
					<div class="mb-6 text-center">
						<div class="mb-4">
							<Code class="mx-auto h-10 w-10 text-blue-600" />
						</div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Custom Development</h3>
						<p class="mb-3 text-sm text-gray-600">
							Bespoke features and integrations for your specific needs
						</p>
						<div class="text-2xl font-bold text-blue-600">Custom quote</div>
					</div>

					<ul class="mb-6 space-y-2">
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Custom feature development
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							API integrations
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Workflow automation
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Ongoing maintenance
						</li>
					</ul>

					<button
						onclick={() => (formData.serviceType = 'custom-development')}
						class="w-full rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200"
					>
						Select This Service
					</button>
				</div>

				<div
					in:fly={{ y: 30, duration: 600, delay: 400 }}
					class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
				>
					<div class="mb-6 text-center">
						<div class="mb-4">
							<Server class="mx-auto h-10 w-10 text-blue-600" />
						</div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Managed Hosting & Maintenance</h3>
						<p class="mb-3 text-sm text-gray-600">
							We handle hosting, updates, backups, and maintenance
						</p>
						<div class="text-2xl font-bold text-blue-600">$97-297/month</div>
					</div>

					<ul class="mb-6 space-y-2">
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Managed hosting
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Automatic updates
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Daily backups
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							24/7 monitoring
						</li>
					</ul>

					<button
						onclick={() => (formData.serviceType = 'hosting-management')}
						class="w-full rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200"
					>
						Select This Service
					</button>
				</div>

				<div
					in:fly={{ y: 30, duration: 600, delay: 500 }}
					class="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
				>
					<div class="mb-6 text-center">
						<div class="mb-4">
							<Users class="mx-auto h-10 w-10 text-blue-600" />
						</div>
						<h3 class="mb-2 text-xl font-bold text-gray-900">Training & Consultation</h3>
						<p class="mb-3 text-sm text-gray-600">Team training and strategic CRM consultation</p>
						<div class="text-2xl font-bold text-blue-600">$97-197/hour</div>
					</div>

					<ul class="mb-6 space-y-2">
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Team training sessions
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Best practices consultation
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							CRM strategy planning
						</li>
						<li class="flex items-center text-sm text-gray-700">
							<Check class="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
							Ongoing support
						</li>
					</ul>

					<button
						onclick={() => (formData.serviceType = 'training-consultation')}
						class="w-full rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-200"
					>
						Select This Service
					</button>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-2">
			<!-- Form -->
			<div>
				<h2 class="mb-4 text-3xl font-extrabold text-gray-900">Get in Touch</h2>
				<p class="mb-8 text-gray-600">
					Tell us about your project and we'll get back to you within 24 hours.
				</p>

				{#if form?.success}
					<div class="mb-8 rounded-lg border border-green-200 bg-green-50 p-6">
						<div class="flex items-center">
							<Check class="mr-3 h-6 w-6 text-green-500" />
							<div>
								<h3 class="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
								<p class="mt-1 text-green-700">{form.message}</p>
							</div>
						</div>
					</div>
				{:else if form?.error}
					<div class="mb-8 rounded-lg border border-red-200 bg-red-50 p-6">
						<div class="flex items-center">
							<AlertCircle class="mr-3 h-6 w-6 text-red-500" />
							<div>
								<h3 class="text-lg font-semibold text-red-800">Error</h3>
								<p class="mt-1 text-red-700">{form.error}</p>
							</div>
						</div>
					</div>
				{/if}

				<form
					method="POST"
					use:enhance={() => {
						isSubmitting = true;
						return async ({ update }) => {
							await update();
							isSubmitting = false;
						};
					}}
					class="space-y-6"
				>
					<!-- Basic Information -->
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
								Name *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								bind:value={formData.name}
								class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 {form
									?.errors?.name
									? 'border-red-500'
									: ''}"
								placeholder="John Doe"
							/>
							{#if form?.errors?.name}
								<p class="mt-1 text-sm text-red-500">{form.errors.name}</p>
							{/if}
						</div>

						<div>
							<label for="email" class="mb-2 block text-sm font-medium text-gray-700">
								Email *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								bind:value={formData.email}
								class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 {form
									?.errors?.email
									? 'border-red-500'
									: ''}"
								placeholder="john@company.com"
							/>
							{#if form?.errors?.email}
								<p class="mt-1 text-sm text-red-500">{form.errors.email}</p>
							{/if}
						</div>
					</div>

					<!-- Service Type -->
					<div>
						<fieldset>
							<legend class="mb-2 block text-sm font-medium text-gray-700">
								What can we help you with? *
							</legend>
							<div class="grid gap-3 md:grid-cols-2">
								<label
									class="flex cursor-pointer items-start rounded-lg border border-gray-300 p-4 hover:bg-gray-50 {formData.serviceType ===
									'professional-setup'
										? 'border-blue-500 bg-blue-50'
										: ''}"
								>
									<input
										type="radio"
										name="serviceType"
										bind:group={formData.serviceType}
										value="professional-setup"
										class="mt-1 mr-3"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">Professional Setup ($197)</div>
										<div class="text-xs text-gray-600">Expert installation & setup</div>
									</div>
								</label>

								<label
									class="flex cursor-pointer items-start rounded-lg border border-gray-300 p-4 hover:bg-gray-50 {formData.serviceType ===
									'custom-development'
										? 'border-blue-500 bg-blue-50'
										: ''}"
								>
									<input
										type="radio"
										name="serviceType"
										bind:group={formData.serviceType}
										value="custom-development"
										class="mt-1 mr-3"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">Custom Development</div>
										<div class="text-xs text-gray-600">Bespoke features & integrations</div>
									</div>
								</label>

								<label
									class="flex cursor-pointer items-start rounded-lg border border-gray-300 p-4 hover:bg-gray-50 {formData.serviceType ===
									'hosting-management'
										? 'border-blue-500 bg-blue-50'
										: ''}"
								>
									<input
										type="radio"
										name="serviceType"
										bind:group={formData.serviceType}
										value="hosting-management"
										class="mt-1 mr-3"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">Managed Hosting</div>
										<div class="text-xs text-gray-600">We handle hosting & maintenance</div>
									</div>
								</label>

								<label
									class="flex cursor-pointer items-start rounded-lg border border-gray-300 p-4 hover:bg-gray-50 {formData.serviceType ===
									'other'
										? 'border-blue-500 bg-blue-50'
										: ''}"
								>
									<input
										type="radio"
										name="serviceType"
										bind:group={formData.serviceType}
										value="other"
										class="mt-1 mr-3"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">Other / Not Sure</div>
										<div class="text-xs text-gray-600">Let's discuss your needs</div>
									</div>
								</label>
							</div>
							{#if form?.errors?.serviceType}
								<p class="mt-1 text-sm text-red-500">{form.errors.serviceType}</p>
							{/if}
						</fieldset>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium text-gray-700">
							Tell us about your project *
						</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							bind:value={formData.message}
							class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 {form
								?.errors?.message
								? 'border-red-500'
								: ''}"
							placeholder="Describe your project, requirements, timeline, team size, or any questions you have..."
						></textarea>
						{#if form?.errors?.message}
							<p class="mt-1 text-sm text-red-500">{form.errors.message}</p>
						{/if}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						class="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
					>
						{#if isSubmitting}
							<div class="mr-3 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
							Sending Message...
						{:else}
							<Send class="mr-2 h-5 w-5" />
							Send Message
						{/if}
					</button>

					<p class="text-center text-sm text-gray-500">
						We typically respond within 24 hours during business days
					</p>
				</form>
			</div>

			<!-- Contact Information -->
			<div class="lg:pl-8">
				<div class="mb-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
					<h3 class="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>

					<div class="space-y-4">
						<div class="flex items-start">
							<Mail class="mt-1 mr-4 h-6 w-6 text-blue-600" />
							<div>
								<div class="font-semibold text-gray-900">Email</div>
								<div class="text-gray-600">bottlecrm@micropyramid.com</div>
								<div class="text-sm text-gray-500">Response within 24 hours</div>
							</div>
						</div>

						<div class="flex items-start">
							<Github class="mt-1 mr-4 h-6 w-6 text-blue-600" />
							<div>
								<div class="font-semibold text-gray-900">GitHub Issues</div>
								<div class="text-gray-600">Bug reports & feature requests</div>
								<a
									href="https://github.com/MicroPyramid/opensource-startup-crm/issues"
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm text-blue-600 hover:text-blue-700">Open an issue →</a
								>
							</div>
						</div>

						<div class="flex items-start">
							<Clock class="mt-1 mr-4 h-6 w-6 text-blue-600" />
							<div>
								<div class="font-semibold text-gray-900">Business Hours</div>
								<div class="text-gray-600">Monday - Friday</div>
								<div class="text-sm text-gray-500">9 AM - 6 PM IST</div>
							</div>
						</div>
					</div>
				</div>

				<!-- FAQ -->
				<div>
					<h4 class="mb-4 text-lg font-bold text-gray-900">Frequently Asked Questions</h4>
					<div class="space-y-3">
						<details class="rounded-lg border border-gray-200 bg-white p-4">
							<summary class="cursor-pointer font-medium text-gray-900"
								>How quickly can you set up BottleCRM for my business?</summary
							>
							<p class="mt-2 text-sm leading-relaxed text-gray-600">
								Basic setup can be completed within 24-48 hours. Professional Setup typically takes
								3-5 business days, while Enterprise Setup with custom features may take 1-2 weeks
								depending on complexity.
							</p>
						</details>
						<details class="rounded-lg border border-gray-200 bg-white p-4">
							<summary class="cursor-pointer font-medium text-gray-900"
								>Do you provide training for my team?</summary
							>
							<p class="mt-2 text-sm leading-relaxed text-gray-600">
								Yes! Training is included in our Professional and Enterprise Setup packages. We also
								offer dedicated training sessions at $97-197/hour for teams who need additional
								support.
							</p>
						</details>
						<details class="rounded-lg border border-gray-200 bg-white p-4">
							<summary class="cursor-pointer font-medium text-gray-900"
								>Can you migrate data from our current CRM?</summary
							>
							<p class="mt-2 text-sm leading-relaxed text-gray-600">
								We're currently developing data migration scripts for popular CRM platforms
								including Salesforce, HubSpot, and Pipedrive. These tools will be available soon. In
								the meantime, we can help you manually export/import your data and provide guidance
								on the best migration approach for your specific needs.
							</p>
						</details>
						<details class="rounded-lg border border-gray-200 bg-white p-4">
							<summary class="cursor-pointer font-medium text-gray-900"
								>What if I need ongoing support after setup?</summary
							>
							<p class="mt-2 text-sm leading-relaxed text-gray-600">
								We offer various ongoing support options from monthly managed hosting
								($97-297/month) to hourly consultation ($97-197/hour). You can also access our free
								community support anytime.
							</p>
						</details>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service Benefits -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-extrabold text-gray-900">
				Why Choose Our Professional Services?
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-600">
				While BottleCRM is free, our professional services save you time and ensure optimal
				implementation.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 p-4"
				>
					<Zap class="h-8 w-8 text-blue-600" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-gray-900">Faster Implementation</h3>
				<p class="text-gray-600">
					Get up and running in days, not weeks. Our experts handle the technical setup.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 p-4"
				>
					<Shield class="h-8 w-8 text-green-600" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-gray-900">Best Practices</h3>
				<p class="text-gray-600">Benefit from our experience with dozens of CRM implementations.</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 p-4"
				>
					<Users class="h-8 w-8 text-purple-600" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-gray-900">Team Training</h3>
				<p class="text-gray-600">
					Ensure your team knows how to use BottleCRM effectively from day one.
				</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 p-4"
				>
					<HeadphonesIcon class="h-8 w-8 text-yellow-600" />
				</div>
				<h3 class="mb-2 text-lg font-bold text-gray-900">Ongoing Support</h3>
				<p class="text-gray-600">Get priority support when you need help or have questions.</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 py-20 text-white">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-4xl font-extrabold md:text-5xl">Ready to Get Started?</h2>
		<p class="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl">
			The software is free forever. Professional services help you implement it faster and more
			effectively.
		</p>

		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
			<a
				href="https://github.com/MicroPyramid/opensource-startup-crm"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-2xl transition-all duration-200 hover:scale-105 hover:bg-gray-100"
			>
				<Download class="mr-3 h-6 w-6" />
				Try BottleCRM Free
			</a>
			<button
				onclick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
				class="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-white/10"
			>
				<Send class="mr-3 h-6 w-6" />
				Get Professional Help
			</button>
		</div>
	</div>
</section>
