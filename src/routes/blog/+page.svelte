<script lang="ts">
  import logo1 from '$lib/assets/logo1.png';
  import PostCard from '../../components/PostCard.svelte';
  import type { PageProps } from '../$types';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>Blog - CryptoSharia</title>
  <meta property="og:title" content="Blog - CryptoSharia" />
  <meta name="description" content="Temukan semua update terbaru tentang CryptoSharia di sini." />
  <meta
    property="og:description"
    content="Temukan semua update terbaru tentang CryptoSharia di sini."
  />

  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo1} />
</svelte:head>

<section
  class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
>
  {#if !data.posts || data.posts.length === 0}
    <span class="pt-8 text-center text-xl text-slate-500">Aktivitas/Artikel tidak ditemukan</span>
  {:else}
    {#each data.posts as post}
      <PostCard
        thumbnailUrl={post.thumbnailUrl}
        date={post.date}
        title={post.title}
        slug={post.slug}
        tags={post.tags}
        description={post.description}
      />
    {/each}
  {/if}
</section>
