<script lang="ts">
	let { reversed = false }: { reversed?: boolean } = $props();

	const colors = [
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

	const colorsReversed = [...colors].reverse();
</script>

{#snippet line(color: string)}
	<span class="block h-[2px] w-full {color}"></span>
{/snippet}

<span class="flex flex-col gap-y-1">
	{#each reversed ? colorsReversed : colors as color}
		{@render line(color)}
	{/each}
</span>
