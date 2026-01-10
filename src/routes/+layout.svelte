<script lang="ts">
	import { SvelteTheme } from 'svelte-themes';
	import { asset } from '$app/paths';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>CryptoSharia</title>

	<link rel="icon" type="image/x-icon" href={asset('/favicon.ico')} />
	<link rel="apple-touch-icon" sizes="180x180" href={asset('/apple-touch-icon.png')} />
	<link rel="icon" type="image/png" sizes="32x32" href={asset('/favicon-32x32.png')} />
	<link rel="icon" type="image/png" sizes="16x16" href={asset('/favicon-16x16.png')} />
	<link rel="manifest" href={asset('/site.webmanifest')} />
</svelte:head>

<SvelteTheme enableSystem defaultTheme="system" attribute="class">
	<!-- Replace browser default scrollbar with custom scrollbar -->
	<!-- <ScrollArea class="h-screen" scrollbarYClasses="z-999" type="auto">
	</ScrollArea> -->

	<!-- Let's just use the default scrollbar anyway (For the page scroll atleast) -->
	{@render children()}
</SvelteTheme>
