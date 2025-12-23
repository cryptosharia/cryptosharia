<script lang="ts">
	import { SvelteTheme } from 'svelte-themes';
	import './layout.css';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	let { children } = $props();
</script>

<svelte:head>
	<title>CryptoSharia</title>

	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<SvelteTheme enableSystem defaultTheme="system" attribute="class">
	<!-- Replace browser default scrollbar with custom scrollbar -->
	<ScrollArea class="h-screen" scrollbarYClasses="z-999" type="auto">
		{@render children()}
	</ScrollArea>
</SvelteTheme>
