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
