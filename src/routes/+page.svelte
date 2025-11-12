<script lang="ts">
  import logo1 from '$lib/assets/logo1.png';
  import Articles from './Articles.svelte';
  import Banner from './Banner.svelte';
  import Discord from './Discord.svelte';
  import Faq from './Faq.svelte';
  import Collaborations from './Collaborations.svelte';
  import Team from './Team.svelte';
  import Screenings from './Screening.svelte';
  import About from './About.svelte';
  import Activities from './Activities.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>CryptoSharia</title>
  <meta property="og:title" content="CryptoSharia" />
  <meta
    name="description"
    content="CryptoSharia adalah komunitas pionir yang menghubungkan dunia crypto dengan prinsip syariah, menghadirkan ekosistem edukasi, riset, dan komunitas terpercaya bagi teman-teman muslim yang tertarik untuk berinvestasi aset digital crypto tapi masih sesuai dengan prinsip-prinsip syariah."
  />
  <meta
    property="og:description"
    content="CryptoSharia adalah komunitas pionir yang menghubungkan dunia crypto dengan prinsip syariah, menghadirkan ekosistem edukasi, riset, dan komunitas terpercaya bagi teman-teman muslim yang tertarik untuk berinvestasi aset digital crypto tapi masih sesuai dengan prinsip-prinsip syariah."
  />

  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo1} />
</svelte:head>

<main class="flex flex-col items-center gap-y-10">
  <Banner />
  <About />
  <Collaborations />
  <Team />
  <Screenings tokens={data.tokens} />
  <Discord />
  <Activities posts={data.activities} />
  <Articles posts={data.articles} />
  <Faq />
</main>
