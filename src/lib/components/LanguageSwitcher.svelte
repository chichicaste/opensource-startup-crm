<script>
	import { _, locale } from 'svelte-i18n';
	import { onMount } from 'svelte';

	let currentLocale = 'en';

	// Subscribe to locale changes
	locale.subscribe((value) => {
		currentLocale = value || 'en';
	});

	function switchLanguage(lang) {
		locale.set(lang);
		// Store in localStorage for persistence
		localStorage.setItem('locale', lang);
	}

	// Load saved locale on mount
	onMount(() => {
		const savedLocale = localStorage.getItem('locale');
		if (savedLocale && (savedLocale === 'en' || savedLocale === 'es')) {
			locale.set(savedLocale);
		}
	});
</script>

<div class="language-switcher">
	<button
		class="lang-btn {currentLocale === 'en' ? 'active' : ''}"
		on:click={() => switchLanguage('en')}
		aria-label="Switch to English"
	>
		EN
	</button>
	<button
		class="lang-btn {currentLocale === 'es' ? 'active' : ''}"
		on:click={() => switchLanguage('es')}
		aria-label="Switch to Spanish"
	>
		ES
	</button>
</div>

<style>
	.language-switcher {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.lang-btn {
		padding: 0.5rem 0.75rem;
		border: 1px solid #d1d5db;
		background: white;
		color: #374151;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.lang-btn:hover {
		background: #f9fafb;
		border-color: #9ca3af;
	}

	.lang-btn.active {
		background: #3b82f6;
		color: white;
		border-color: #3b82f6;
	}

	.lang-btn.active:hover {
		background: #2563eb;
		border-color: #2563eb;
	}
</style>