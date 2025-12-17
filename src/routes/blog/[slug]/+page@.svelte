<script lang="ts">
  import { marked } from 'marked';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';
  import { formatDate } from '$lib/utils';
  import Calendar from '$lib/assets/icons/Calendar.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import DotsDivider from '$lib/components/DotsDivider.svelte';
  import Title from '$lib/components/Title.svelte';
  import NotFoundPage from '$lib/components/NotFoundPage.svelte';
  import Tag from '$lib/components/Tag.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.post ? data.post.title : '404'} - CryptoSharia</title>
  <meta property="og:title" content="{data.post ? data.post.title : '404'} - CryptoSharia" />
  <meta
    name="description"
    content={data.post ? data.post.description : 'Aktivitas/Artikel tidak ditemukan.'}
  />
  <meta
    property="og:description"
    content={data.post ? data.post.description : 'Aktivitas/Artikel tidak ditemukan.'}
  />

  <meta property="og:type" content="article" />
  <meta property="og:image" content={data.post?.thumbnailUrl} />
</svelte:head>

{#if !data.post}
  <NotFoundPage message="Postingan tidak ditemukan" />
{:else}
  <span class="block h-21 w-full"></span>
  <main class="mx-auto flex w-full max-w-[91%] flex-col xl:max-w-[66rem]">
    <section>
      <div class="mb-3.5 flex flex-row items-start gap-x-4">
        {@render backButton()}
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          class="text-[2rem] leading-10 font-medium text-orange-600 sm:text-4xl md:text-[2.5rem]"
        >
          {data.post.title}
        </h1>
      </div>
      <img
        data-aos="fade"
        data-aos-duration="1000"
        src={data.post.thumbnailUrl}
        alt={data.post.title}
        class="w-full rounded-2xl md:rounded-3xl"
      />
      <div class="mt-2 flex flex-col gap-y-3 md:mb-2 md:flex-row">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="flex flex-1 flex-row flex-wrap gap-2"
        >
          {#each data.post.tags as tag}
            <Tag text={tag} />
          {/each}
        </div>
        <span
          data-aos="zoom-in"
          data-aos-duration="1000"
          class="mb-1 flex flex-row justify-end text-sm text-slate-700 md:text-base"
        >
          <Calendar class="size-5 md:size-6" />
          <span>{formatDate(data.post.date, 'text')}</span></span
        >
      </div>
      <Divider usePadding={false} />
      <p data-aos="zoom-out" data-aos-duration="1000" class="mt-2 text-justify text-slate-700">
        {data.post.description}
      </p>
    </section>
    <DotsDivider />
    <section data-aos="fade-u" data-aos-duration="1000" class="markdown-body my-4">
      {@html marked(data.post.content)}
    </section>
    <DotsDivider padding="4rem" />
  </main>
  <section class="nav-space z-10 mx-auto mb-10 w-full max-w-[90rem]">
    <Title class="text-center"
      >{data.post.category === 'activity' ? 'Aktivitas' : 'Artikel'} Terbaru</Title
    >
    <Divider />
    <div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
      <div
        class="flex w-full flex-row flex-wrap items-start justify-center gap-6 px-6 pt-5 md:gap-8 lg:gap-10"
      >
        {#if !data.posts || data.posts.length === 0}
          <span class="pt-8 text-center text-xl text-slate-500"
            >{data.post.category === 'activity' ? 'Aktivitas' : 'Artikel'} tidak ditemukan</span
          >
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
      </div>
      <PrimaryButton
        text="Lihat {data.post.category === 'activity' ? 'Aktivitas' : 'Artikel'} Lainnya"
        href="/blog/{data.post.category === 'activity' ? 'aktivitas' : 'artikel'}"
        size="medium"
        class="hidden md:block"
      />
      <PrimaryButton
        text="Lihat {data.post.category === 'activity' ? 'Aktivitas' : 'Artikel'} Lainnya"
        href="/blog/{data.post.category === 'activity' ? 'aktivitas' : 'artikel'}"
        size="small"
        class="block md:hidden"
      />
    </div>
  </section>
{/if}

{#snippet backButton()}
  <button
    data-aos="zoom-in"
    data-aos-duration="1000"
    aria-label="Kembali ke Blog"
    onclick={() => window.history.back()}
    class="mt-0.75 hidden rounded-full text-orange-600 transition-transform duration-300 hover:scale-115 hover:cursor-pointer md:block"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.3"
      stroke="currentColor"
      class="h-8.5 w-8.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  </button>
{/snippet}
