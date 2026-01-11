<script lang="ts">
	import heroBg from '$lib/assets/hero-bg.avif';
	import logo2 from '$lib/assets/logo2.png';
	import { DarkOverlay } from '$lib/components/ui/dark-overlay';
</script>

<section
	id="hero"
	class="relative fl-h-[36rem/40rem] w-full bg-cover bg-fixed bg-center"
	style:background-image="url({heroBg})"
>
	<DarkOverlay class="absolute inset-0 flex items-center justify-center">
		<div class="flex max-w-7xl flex-col items-center gap-y-5 px-2">
			<img src={logo2} alt="CryptoSharia Logo" class="fl-w-48/64" />
			<div class="flex flex-col items-center text-center text-primary-foreground text-shadow-lg">
				<h1 class="font-serif fl-text-3xl/5xl font-semibold">CryptoSharia</h1>
				<p class="fl-text-base/xl">Platform Edukasi dan Informasi Aset Kripto Syariah</p>
			</div>
		</div>
	</DarkOverlay>
</section>
