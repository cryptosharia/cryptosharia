<script lang="ts">
  let {
    currentPage,
    totalPages,
    onPageChange
  }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void } = $props();

  // Ensure currentPage is within valid range
  $effect(() => {
    if (currentPage < 1) {
      onPageChange(1);
    } else if (currentPage > totalPages) {
      onPageChange(totalPages);
    }
  });

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  let displayedPages: number[] = $state([]);

  $effect(() => {
    // Listen to currentPage changes to update displayedPages
    let newDisplayedPages: number[] = [currentPage - 1, currentPage, currentPage + 1];

    // Filter out invalid pages
    newDisplayedPages = newDisplayedPages.filter((page) => page >= 1 && page <= totalPages);

    // If the first page is 1 and there are more than 3 pages, ensure we show the first three pages
    if (newDisplayedPages[0] === 1 && totalPages >= 3) {
      newDisplayedPages = [1, 2, 3];
    }

    // If the last page is totalPages and there are more than 3 pages, ensure we show the last three pages
    if (newDisplayedPages[newDisplayedPages.length - 1] === totalPages && totalPages >= 3) {
      newDisplayedPages = [totalPages - 2, totalPages - 1, totalPages];
    }

    // Update the displayedPages state
    displayedPages = newDisplayedPages;
  });

  $effect(() => {});
</script>

<div class="flex flex-row gap-x-2">
  {@render paginationButton('<')}
  {#each displayedPages as page}
    {@render paginationButton(page.toString())}
  {/each}
  <!-- {#if totalPages > maxDisplayedPages}
    {#if totalPages === 4}
      {@render paginationButton('4')}
    {:else}
      <span class="flex items-center px-2 text-orange-600">...</span>
      {@render paginationButton(totalPages.toString())}
    {/if}
  {/if} -->
  {@render paginationButton('>')}
</div>

{#snippet paginationButton(label: string)}
  <button
    class="rounded-lg border border-orange-600 px-3.5 py-1.5 text-orange-600 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:bg-orange-600/10 hover:text-orange-600"
    class:bg-orange-600={label === currentPage.toString()}
    class:text-white={label === currentPage.toString()}
    onclick={() =>
      goToPage(label === '<' ? currentPage - 1 : label === '>' ? currentPage + 1 : parseInt(label))}
  >
    {label}
  </button>
{/snippet}
