<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { MoonIcon, SunIcon, LaptopIcon, EllipsisIcon } from '@lucide/svelte';
	import { useTheme } from 'svelte-themes';

	type Props = {
		class?: string;
	};

	const { class: className }: Props = $props();

	const theme = useTheme();

	function handleClick() {
		switch (theme.theme) {
			case 'dark':
				theme.theme = 'light';
				break;
			case 'light':
				theme.theme = 'system';
				break;
			default:
				theme.theme = 'dark';
		}
	}
</script>

<Button
	variant="default"
	size="icon-lg"
	onclick={handleClick}
	class={cn('border-2 border-primary hover:bg-transparent hover:text-primary', className)}
>
	{#if theme.theme === 'dark'}
		<MoonIcon />
	{:else if theme.theme === 'light'}
		<SunIcon />
	{:else if theme.theme === 'system'}
		<LaptopIcon />
	{:else}
		<EllipsisIcon />
	{/if}
</Button>
