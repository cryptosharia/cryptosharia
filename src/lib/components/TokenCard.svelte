<script lang="ts">
  let {
    slug,
    name,
    ticker,
    color,
    status,
    logoUrl,
    isHiddenOnXS = false,
    isHiddenOnSM = false,
    isHiddenOnMD = false,
    isHiddenOnLG = false,
    isHiddenOnXL = false
  }: {
    slug: string;
    name: string;
    ticker: string;
    color: string;
    status: 'halal' | 'haram' | 'syubhat';
    logoUrl: string;
    isHiddenOnXS?: boolean;
    isHiddenOnSM?: boolean;
    isHiddenOnMD?: boolean;
    isHiddenOnLG?: boolean;
    isHiddenOnXL?: boolean;
  } = $props();
</script>

<div
  data-aos="flip-right"
  data-aos-duration="1000"
  class:max-sm:hidden={isHiddenOnXS}
  class:sm:max-md:hidden={isHiddenOnSM}
  class:md:max-lg:hidden={isHiddenOnMD}
  class:lg:max-xl:hidden={isHiddenOnLG}
  class:xl:hidden={isHiddenOnXL}
>
  <a
    href="/screening/{slug.toLowerCase()}"
    class="group -mt-13 flex w-42 flex-col items-center transition-transform duration-300 hover:scale-105 hover:cursor-pointer md:hover:scale-110"
  >
    <div class="relative z-3 translate-y-9">
      <div
        class="mx-auto flex size-24 items-center justify-center overflow-hidden rounded-full bg-white outline-2"
        class:outline-green-500={status === 'halal'}
        class:outline-red-500={status === 'haram'}
        class:outline-slate-400={status === 'syubhat'}
      >
        <img src={logoUrl} alt={`${name} | ${ticker}`} class="size-24 rounded-full" />
      </div>
      <div
        class="absolute bottom-0 left-1/2 h-2.5 w-24 -translate-x-1/2"
        class:bg-green-500={status === 'halal'}
        class:bg-red-500={status === 'haram'}
        class:bg-slate-400={status === 'syubhat'}
      ></div>
    </div>
    <div
      class="z-2 h-10 w-full rounded-2xl border-2 border-white shadow-md"
      class:bg-green-500={status === 'halal'}
      class:bg-red-500={status === 'haram'}
      class:bg-slate-400={status === 'syubhat'}
    ></div>
    <div
      class="w-[93%] -translate-y-1 rounded-b-4xl border-2 border-t-0 border-slate-200 bg-white pt-1.75 pb-0.75 text-center shadow-md"
    >
      <h3
        class="line-clamp-1 w-full text-xl font-bold group-hover:underline"
        style="color: {color}; letter-spacing: 1.5px"
      >
        {name}
      </h3>
      <span class="text-md line-clamp-1 font-bold text-slate-600">{ticker}</span>
    </div>
  </a>
</div>
