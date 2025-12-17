<script lang="ts">
  import btc from '$lib/assets/crypto-icons/btc.png';
  import eth from '$lib/assets/crypto-icons/eth.png';
  import sol from '$lib/assets/crypto-icons/sol.png';
  import sui from '$lib/assets/crypto-icons/sui.png';
  import Title from '$lib/components/Title.svelte';

  const goals = [
    'Menjadi pusat edukasi dan informasi aset crypto sesuai syariah di Indonesia.',
    'Menjadi wadah kolaborasi aktif dan produktif bagi para pelaku industri Web3 di Indonesia.',
    'Mendukung tranformasi ekonomi digital di Indonesia melalui prinsip keuangan syariah.'
  ];
</script>

{#snippet line(device: 'desktop' | 'mobile')}
  {#if device === 'desktop'}
    <div class="mx-8 hidden border-r-2 border-orange-300 md:block lg:mx-12"></div>
  {:else}
    <div class="mr-8 ml-6 border-r-2 border-orange-300 md:hidden lg:mx-12"></div>
  {/if}
{/snippet}

<section
  class="flex max-w-[90rem] flex-col items-stretch justify-between px-4 sm:px-6 md:flex-row md:px-8 lg:px-24 xl:px-36"
>
  <div
    data-aos="fade-right"
    data-aos-duration="1000"
    class="flex flex-1 flex-col rounded-4xl border border-slate-200 p-8 shadow-md"
  >
    <Title aos={false} isSmall={true}>Tentang <u><i>CryptoSharia</i></u></Title>
    <p class="text-justify text-[1.0625rem]">
      <i><b>Crypto Sharia</b></i> adalah komunitas pionir yang menghubungkan dunia crypto dengan prinsip
      syariah, menghadirkan ekosistem edukasi, riset, dan komunitas terpercaya bagi teman-teman muslim
      yang tertarik untuk berinvestasi aset digital crypto tapi masih sesuai dengan prinsip-prinsip syariah.
    </p>
    <div class="flex-1"></div>
    <div class="flex flex-row items-center justify-around gap-6 pt-6">
      <img src={btc} alt="Bitcoin" class="size-8" />
      <img src={eth} alt="Ethereum" class="size-8" />
      <img src={sol} alt="Solana" class="size-8" />
      <img src={sui} alt="Sui" class="size-8" />
    </div>
  </div>
  {@render line('desktop')}
  <div
    data-aos="fade-left"
    data-aos-duration="1000"
    class="flex flex-1 flex-row items-stretch p-8 pb-0 pl-0 md:flex-col xl:pr-9"
  >
    {@render line('mobile')}
    <div>
      <div>
        <Title aos={false} isSmall={true}>Community Goals</Title>
        <ul class="text-base">
          {#each goals as goal}
            <li class="relative mb-2 text-[1.0625rem]">
              <div
                class="absolute top-1.5 -left-9.75 size-3 rounded-full bg-orange-600 lg:-left-13.75"
              ></div>
              {goal}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
