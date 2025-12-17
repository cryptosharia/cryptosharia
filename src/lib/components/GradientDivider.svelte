<script lang="ts">
  let { size, reverse = false }: { size: 'small' | 'large'; reverse?: boolean } = $props();

  const colorsLarge = [
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

  const colorsLargeReversed = [...colorsLarge].reverse();

  const colorsSmall = [
    'bg-orange-100',
    'bg-orange-300',
    'bg-orange-500',
    'bg-orange-700',
    'bg-orange-900'
  ];

  const colorsSmallReversed = [...colorsSmall].reverse();
</script>

{#snippet line(color: string)}
  <span class="block h-[2px] w-full {color}"></span>
{/snippet}

<span class="flex flex-col gap-y-1">
  {#if size === 'large'}
    {#if reverse}
      {#each colorsLargeReversed as color, i}
        {@render line(color)}
      {/each}
    {:else}
      {#each colorsLarge as color, i}
        {@render line(color)}
      {/each}
    {/if}
  {:else if reverse}
    {#each colorsSmallReversed as color, i}
      {@render line(color)}
    {/each}
  {:else}
    {#each colorsSmall as color, i}
      {@render line(color)}
    {/each}
  {/if}
</span>
