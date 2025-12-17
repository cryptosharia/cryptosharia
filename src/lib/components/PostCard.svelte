<script lang="ts">
  import { formatDate } from '$lib/utils';

  let {
    thumbnailUrl,
    date,
    title,
    slug,
    tags,
    description,
    isHiddenOnMobile = false,
    isHiddenOnTablet = false
  }: {
    thumbnailUrl: string;
    date: Date;
    title: string;
    slug: string;
    tags: string[];
    description: string;
    isHiddenOnMobile?: boolean;
    isHiddenOnTablet?: boolean;
  } = $props();
</script>

<div
  data-aos="fade-up"
  data-aos-duration="1000"
  class:max-md:hidden={isHiddenOnMobile}
  class:md:max-xl:hidden={isHiddenOnTablet}
>
  <div
    class="group mx-auto w-84 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-xl transition-transform duration-300 hover:scale-105 max-md:w-[95%] max-md:max-w-111 xl:w-88"
  >
    <a href="/blog/{slug}">
      <div class="relative h-50 w-full object-cover">
        <img src={thumbnailUrl} alt={title} class="size-full object-cover" />
        <span
          class="absolute right-1 bottom-1 rounded-md bg-black/50 px-1.5 py-0.5 text-sm font-normal text-white"
          >{formatDate(date)}</span
        >
      </div>
      <div class="p-2.5 pt-1 md:p-3 md:pt-1">
        <h2
          class="line-clamp-1 text-left text-xl font-medium text-orange-600 group-hover:underline"
        >
          {title}
        </h2>
        <p class="line-clamp-2 text-justify text-slate-700">{description}</p>
        <div class="mt-2 flex flex-row items-stretch justify-end gap-x-1.5">
          {#each tags.slice(0, 3) as tag}
            <span
              class="flex flex-row items-center rounded-2xl border border-slate-200 bg-slate-100 px-2.25 py-0.5 text-center text-sm text-slate-700 shadow-2xl"
              >{tag}</span
            >
          {/each}
        </div>
      </div>
    </a>
  </div>
</div>
