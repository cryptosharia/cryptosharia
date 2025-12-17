<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import Title from '$lib/components/Title.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';

  let { posts } = $props();
</script>

<section id="artikel" class="z-9 mb-2 w-full max-w-[90rem] lg:max-xl:max-w-[70rem]">
  <Title class="text-center">Artikel Terbaru</Title>
  <Divider />
  <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
    <div
      class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
    >
      {#if !posts || posts.length === 0}
        <span class="pt-8 text-center text-xl text-slate-500"
          >Aktivitas/Artikel tidak ditemukan</span
        >
      {:else}
        {#each posts as post, i}
          <PostCard
            thumbnailUrl={post.thumbnailUrl}
            date={post.date}
            title={post.title}
            slug={post.slug}
            tags={post.tags}
            description={post.description}
            isHiddenOnMobile={i >= 3}
            isHiddenOnTablet={i >= 4}
          />
        {/each}
      {/if}
    </div>
    <PrimaryButton
      text="Lihat Artikel Lainnya"
      href="/blog/artikel"
      size="medium"
      class="hidden md:block"
    />
    <PrimaryButton
      text="Lihat Artikel Lainnya"
      href="/blog/artikel"
      size="small"
      class="block md:hidden"
    />
  </div>
</section>
