<script lang="ts">
	import { useTheme } from 'svelte-themes';
	let { reversed = false }: { reversed?: boolean } = $props();

	const baseColors = [
		'bg-orange-100',
		'bg-orange-200',
		'bg-orange-300',
		'bg-orange-400',
		'bg-orange-500',
		'bg-orange-600',
		'bg-orange-700',
		'bg-orange-800',
		'bg-orange-900'
	];

	const theme = useTheme();

	let colors = $derived.by(() => {
		if (theme.resolvedTheme === 'dark') {
			return [...baseColors].reverse();
		} else {
			return baseColors;
		}
	});

	let reversedColors = $derived([...colors].reverse());
</script>

{#snippet line(color: string)}
	<span class="block h-[2px] w-full {color}"></span>
{/snippet}

<span class="flex flex-col gap-y-1">
	{#each reversed ? reversedColors : colors as color}
		{@render line(color)}
	{/each}
</span>
