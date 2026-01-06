<script lang="ts">
	import { getPageHeight, getViewportHeight } from '$lib/utils';
	import FloatingCta from './FloatingCta.svelte';
	import Navbar from './Navbar.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let { children } = $props();

	// Current scroll position
	let scrollPosition = $state(0);

	// Scroll status whether at the top, at the bottom, or in the middle
	let scrollStatus: 'bottom' | 'top' | 'middle' = $derived.by(() => {
		if (scrollPosition <= 0) {
			return 'top';
		} else if (scrollPosition >= getPageHeight() - getViewportHeight()) {
			return 'bottom';
		} else {
			return 'middle';
		}
	});

	// Whether the floating CTA should be shown or not
	let isFloatingCtaShown = $derived(scrollStatus === 'middle');
</script>

<svelte:window bind:scrollY={scrollPosition} />

{@render children()}

<Navbar />
<ThemeSwitcher />
<FloatingCta isShown={isFloatingCtaShown} />
<div class="fixed top-2 right-2 z-50 bg-gray-800 p-2 text-xs font-semibold text-white">
	<span class="sm:hidden">xs</span>
	<span class="hidden sm:inline md:hidden">sm</span>
	<span class="hidden md:inline lg:hidden">md</span>
	<span class="hidden lg:inline xl:hidden">lg</span>
	<span class="hidden xl:inline 2xl:hidden">xl</span>
	<span class="hidden 2xl:inline">2xl</span>
</div>
