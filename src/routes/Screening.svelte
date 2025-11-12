<script lang="ts">
  import Divider from '../components/Divider.svelte';
  import TokenCard from '../components/TokenCard.svelte';
  import Title from '../components/Title.svelte';
  import PrimaryButton from '../components/PrimaryButton.svelte';

  let { tokens } = $props();
</script>

<section id="screening" class="nav-space z-8 mb-0 w-full max-w-[90rem]">
  <Title class="text-center">Token Screening</Title>
  <Divider />
  <div class="mx-auto mt-8 flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
    <div
      class="flex w-full flex-row flex-wrap items-start justify-center gap-1 gap-y-10 px-6 pt-5 sm:gap-8 md:max-w-[85%] md:gap-12 lg:max-w-[82%] lg:gap-10 xl:max-w-[90%] xl:gap-15"
    >
      {#if !tokens || tokens.length === 0}
        <span class="pt-8 text-center text-xl text-slate-500">Token tidak ditemukan</span>
      {:else}
        {#each tokens as token, i}
          <TokenCard
            slug={token.slug}
            name={token.name}
            ticker={token.symbol}
            color={token.color}
            status={token.status}
            logoUrl={token.logoUrl}
            isHiddenOnXS={i >= 8}
            isHiddenOnSM={i >= 9}
            isHiddenOnMD={i >= 9}
            isHiddenOnLG={i >= 12}
          />
        {/each}
      {/if}
    </div>
    <PrimaryButton
      text="Lihat Token Lainnya"
      href="/screening"
      size="medium"
      class="hidden md:block"
    />
    <PrimaryButton
      text="Lihat Token Lainnya"
      href="/screening"
      size="small"
      class="block md:hidden"
    />
  </div>
</section>
