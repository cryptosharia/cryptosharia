<script lang="ts">
  import GradientDivider from '$lib/components/GradientDivider.svelte';
  import discordLogo from '$lib/assets/discord/discord-logo.png';
  import posterMobile from '$lib/assets/discord/poster-mobile.png';
  import poster from '$lib/assets/discord/poster.png';
  import informationUpdate from '$lib/assets/discord/information-update.png';
  import informationUpdateMobile from '$lib/assets/discord/information-update-mobile.png';
  import halalCoinCalls from '$lib/assets/discord/halal-coin-calls.png';
  import halalCoinCallsMobile from '$lib/assets/discord/halal-coin-calls-mobile.png';
  import modules from '$lib/assets/discord/modules.png';
  import cryptoModule from '$lib/assets/discord/crypto-module.png';
  import shariaModule from '$lib/assets/discord/sharia-module.png';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';

  import testimonial1 from '$lib/assets/testimonials/testimonial1.png';
  import testimonial2 from '$lib/assets/testimonials/testimonial2.png';
  import testimonial3 from '$lib/assets/testimonials/testimonial3.png';
  import testimonial4 from '$lib/assets/testimonials/testimonial4.png';
  import testimonial5 from '$lib/assets/testimonials/testimonial5.png';
  import testimonial6 from '$lib/assets/testimonials/testimonial6.png';

  const discordBG =
    'https://img.freepik.com/free-photo/abstract-orange-glowing-lines-background_1017-3201.jpg?semt=ais_hybrid&w=740';

  const containerPadding =
    'max-w-[70rem] gap-y-12 px-[3%] py-14 sm:px-[12%] md:gap-y-15 md:px-[4%] md:py-17 lg:gap-y-18 lg:px-[5%] lg:py-20 xl:px-[4%] 2xl:px-[0]';

  const testimonials = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6
  ];
</script>

<section id="discord" class="w-full">
  <GradientDivider size="large" />
  <div
    class="w-full bg-cover bg-center"
    style="background-image: url({discordBG}); background-attachment: fixed;"
  >
    <div class="bg-black/80">
      <div class="mx-auto flex flex-col items-center {containerPadding}">
        <h2
          data-aos="zoom-in"
          data-aos-duration="1000"
          class="strokeme text-center font-jua text-5xl text-orange-600 md:text-6xl"
        >
          JOIN <span class="text-discord">Discord Premium</span> CryptoSharia
        </h2>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={posterMobile}
          alt="Discord Poster"
          class="mx-auto block w-full md:hidden md:w-1/2"
        />
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={poster}
          alt="Discord Poster"
          class="hidden w-full md:block md:w-full"
        />
        <div class="flex w-full flex-col gap-y-8 md:hidden">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={cryptoModule}
            alt="Discord Crypto Module"
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={shariaModule}
            alt="Discord Sharia Module"
          />
        </div>
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          class="hidden w-full md:block"
          src={informationUpdate}
          alt="Discord Information Update"
        />
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          class="block w-full md:hidden"
          src={informationUpdateMobile}
          alt="Discord Information Update"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          class="hidden w-full md:block"
          src={halalCoinCalls}
          alt="Discord Halal Coin Calls"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          class="block w-full md:hidden"
          src={halalCoinCallsMobile}
          alt="Discord Halal Coin Calls"
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          class="hidden w-full md:block"
          src={modules}
          alt="Discord Modules"
        />
      </div>
      <div class="flex flex-col justify-center gap-y-4">
        <h2
          data-aos="zoom-in"
          data-aos-duration="1000"
          class="text-center text-3xl font-semibold text-slate-100 sm:text-4xl md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem]"
        >
          <i>Testimoni</i>
        </h2>
        <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-row">
          {#each Array.from({ length: 3 }) as _}
            <div class="flex shrink-0 animate-discord-testimonial flex-row">
              {#each testimonials as x}
                {@render testimonial(x)}
              {/each}
            </div>
          {/each}
        </div>
      </div>
      <div class="mx-auto flex flex-col items-center gap-y-10 {containerPadding}">
        <blockquote class="text-center font-jua">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            class="mb-1.5 text-3xl font-bold text-white md:text-4xl"
          >
            ❝Kapan lagi ada komunitas crypto yang bukan cuma ngajarin cuan, tapi juga taat syariat,
            serta melek teknologi masa depan?❞
          </p>
          <!-- <cite
            data-aos="zoom-in"
            data-aos-duration="1000"
            class="text-2xl font-bold text-white italic md:text-[2rem]">-Daffa Ilhami-</cite
          > -->
        </blockquote>
        {@render joinButton('large')}
        {@render joinButton('medium')}
        {@render joinButton('small')}
      </div>
    </div>
  </div>
  <GradientDivider size="large" reverse={true} />
</section>

{#snippet testimonial(src: string)}
  <img
    {src}
    alt="Discord Testimonial"
    class="mr-2 h-52 w-106 rounded-xl border-2 border-slate-200 sm:h-60 sm:w-122 md:mr-3 md:h-62 md:w-126 md:rounded-2xl lg:h-64 lg:w-130 xl:h-66 xl:w-134"
  />
{/snippet}

{#snippet joinButton(size: 'small' | 'medium' | 'large')}
  <div
    data-aos="zoom-out"
    data-aos-duration="1000"
    class="flex-row items-center justify-center"
    class:hidden={size === 'large' || size === 'medium'}
    class:xl:flex={size === 'large'}
    class:sm:flex={size === 'medium'}
    class:xl:hidden={size === 'medium'}
    class:flex={size === 'small'}
    class:sm:hidden={size === 'small'}
  >
    <img
      src={discordLogo}
      alt="Discord Logo"
      class="-rotate-90"
      class:h-10={size === 'large'}
      class:h-9={size === 'small' || size === 'medium'}
      class:w-13={size === 'large'}
      class:w-12={size === 'medium' || size === 'small'}
      class:translate-x-[10px]={size === 'large'}
      class:translate-x-[9px]={size === 'small' || size === 'medium'}
    />
    <PrimaryButton
      {size}
      openInNewTab={true}
      text="< Gabung Sekarang >"
      href="https://lynk.id/cryptosharia"
    />
    <img
      src={discordLogo}
      alt="Discord Logo"
      class="rotate-90"
      class:h-10={size === 'large'}
      class:h-9={size === 'small' || size === 'medium'}
      class:w-13={size === 'large'}
      class:w-12={size === 'medium' || size === 'small'}
      class:translate-x-[-10px]={size === 'large'}
      class:translate-x-[-9px]={size === 'small' || size === 'medium'}
    />
  </div>
{/snippet}

<style>
  .text-discord {
    color: #5865f2;
  }

  @media (min-width: 1024px) {
    .strokeme {
      text-shadow:
        -2.5px -2.5px 0 #fff,
        2.5px -2.5px 0 #fff,
        -2.5px 2.5px 0 #fff,
        2.5px 2.5px 0 #fff;
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    .strokeme {
      text-shadow:
        -2px -2px 0 #fff,
        2px -2px 0 #fff,
        -2px 2px 0 #fff,
        2px 2px 0 #fff;
    }
  }

  @media (max-width: 639px) {
    .strokeme {
      text-shadow:
        -1.5px -1.5px 0 #fff,
        1.5px -1.5px 0 #fff,
        -1.5px 1.5px 0 #fff,
        1.5px 1.5px 0 #fff;
    }
  }
</style>
