<script lang="ts">
	import Navbar from './Navbar.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let { children } = $props();
</script>

{@render children()}
<Navbar />
<ThemeSwitcher class="fixed bottom-3 left-3" />
