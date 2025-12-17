<script lang="ts">
  import logo1 from '$lib/assets/logo1.png';
  import { page } from '$app/state';
  import PrimaryButton from '$lib/components/PrimaryButton.svelte';
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  <title>{page.status} - CryptoSharia</title>
  <meta property="og:title" content="{page.status} - CryptoSharia" />
  <meta
    name="description"
    content={page.status == 404 ? 'Halaman tidak ditemukan' : 'Terjadi kesalahan'}
  />
  <meta
    property="og:description"
    content={page.status == 404 ? 'Halaman tidak ditemukan' : 'Terjadi kesalahan'}
  />

  <meta property="og:type" content="website" />
  <meta property="og:image" content={logo1} />
</svelte:head>

<div class="flex h-screen w-screen flex-col items-center justify-center">
  <h1 id="status" style="font-weight: bold; color: var(--color-orange-600); text-align: center;">
    {page.status}
  </h1>
  <h2 id="message" style="font-weight: 600; text-align: center;">
    {page.status == 404 ? 'Halaman tidak ditemukan' : 'Terjadi kesalahan'}
  </h2>
  <br />
  {@render button('large')}
  {@render button('medium')}
  {@render button('small')}
</div>

{#snippet button(size: 'small' | 'medium' | 'large')}
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
    <PrimaryButton {size} openInNewTab={false} text="Kembali ke Beranda" href="/" />
  </div>
{/snippet}

<style>
  h1#status {
    @media (min-width: 1024px) {
      font-size: 6rem;
    }
    @media (max-width: 1023px) {
      font-size: 5rem;
    }
    @media (max-width: 639px) {
      font-size: 4rem;
    }
  }

  h2#message {
    @media (min-width: 1024px) {
      font-size: 2.5rem;
      margin-top: -1.5rem;
    }
    @media (max-width: 1023px) {
      font-size: 2rem;
      margin-top: -1rem;
    }
    @media (max-width: 639px) {
      font-size: 1.5rem;
      margin-top: -0.5rem;
    }
  }
</style>
