<script>
  import PrimaryButton from './PrimaryButton.svelte';
  let { message } = $props();
</script>

<main class="flex h-screen w-full flex-col items-center justify-center gap-y-2 text-center">
  <h1 class="text-7xl font-bold text-orange-600 md:text-8xl" style="letter-spacing: 0.5rem;">
    404
  </h1>
  <h1 class="mb-4 text-3xl font-bold text-orange-600 md:text-4xl">{message}</h1>
  <PrimaryButton text="Kembali ke Blog" href="/blog" size="medium" class="hidden md:block" />
  <PrimaryButton text="Kembali ke Blog" href="/blog" size="small" class="block md:hidden" />
</main>
