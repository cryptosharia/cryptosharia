<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Chip from '../../components/Chip.svelte';
  import Divider from '../../components/Divider.svelte';
  import { capitalizeFirstLetter, getUrlLastSegment } from '../../utils';
  import { navigating, page } from '$app/state';
  import Pagination from '../../components/Pagination.svelte';

  let { children } = $props();
  const categories = ['Semua', 'Halal', 'Haram', 'Syubhat'];

  let selectedCategory = $state('Semua');

  let currentPage = $derived(parseInt(page.url.searchParams.get('page') || '1'));
  let pagesCount = $derived(page.data.pagesCount);

  onMount(() => {
    const lastSegment = getUrlLastSegment().toLowerCase();

    if (lastSegment === 'halal' || lastSegment === 'haram' || lastSegment === 'syubhat') {
      selectedCategory = capitalizeFirstLetter(lastSegment);
    } else {
      selectedCategory = 'Semua';
    }
  });

  let keyword = $state('');
  let timer: ReturnType<typeof setTimeout>;

  $effect(() => {
    // Update keyword when navigation completes
    navigating.complete?.then(() => {
      keyword = new URLSearchParams(window.location.search).get('search') || '';
    });
  });

  // A function to do search whenever the user has stopped typing for 1.2 seconds
  function onInput(e: any) {
    keyword = e.target ? e.target.value : '';

    // Reset the timer whenever user types
    clearTimeout(timer);

    // Do search after 1.2 seconds of not typing
    timer = setTimeout(() => goto(`${window.location.pathname}?search=${keyword}`), 1200);
  }
</script>

<main class="nav-space mx-auto w-full max-w-[90rem] text-center">
  <span class="block h-23 w-full"></span>
  <section class="mx-auto max-w-[95%]">
    <h1
      data-aos="fade-down"
      data-aos-duration="1000"
      class="text-4xl text-orange-600 sm:text-[2.75rem] md:text-5xl"
    >
      <b>Token Screening</b>
    </h1>
    <p data-aos="zoom-out" data-aos-duration="1000" class="my-2 text-[1.11rem] text-slate-700">
      Daftar token yang sudah di-<i>screening</i> oleh tim <i><b>CryptoSharia</b></i>
    </p>
  </section>
  <Divider />
  <div
    data-aos="zoom-in"
    data-aos-duration="1000"
    class="mx-auto mt-4 flex w-[85%] flex-col items-center justify-between gap-y-4 xl:w-[80%] xl:flex-row"
  >
    <div class="flex flex-row gap-x-2">
      {#each categories as category}
        <Chip
          isSelected={category === selectedCategory}
          text={category}
          onPress={(text) => {
            selectedCategory = text;

            if (text.toUpperCase() === 'SEMUA') {
              goto('/screening');
            } else {
              goto(`/screening/${text.toLowerCase()}`);
            }
          }}
        />
      {/each}
    </div>
    <div class="flex w-full flex-row items-center justify-center xl:w-fit">
      <input
        type="search"
        placeholder={`Cari token ${selectedCategory === 'Semua' ? '' : selectedCategory.toLowerCase()}`}
        value={keyword}
        oninput={onInput}
        class="w-full rounded-xl bg-slate-50 px-4 py-2.5 ring ring-slate-300 focus:text-orange-600 focus:ring-2 focus:ring-orange-600 focus:outline-0 xl:w-[16rem]"
      />
    </div>
  </div>
  {@render children?.()}
  <section class="mt-10 flex justify-center">
    <Pagination
      {currentPage}
      {pagesCount}
      onPageChange={(currentPage: number) => {
        const url = new URL(page.url.href);
        url.searchParams.set('page', currentPage.toString());

        goto(url);
      }}
    />
  </section>
</main>
