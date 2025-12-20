<script lang="ts">
	import heroBg from '$lib/assets/hero-bg.avif';
	import logo2 from '$lib/assets/logo2.png';
</script>

<section
	id="hero"
	class="relative fl-h-[36rem/40rem] w-full bg-cover bg-center"
	style:background-image="url({heroBg})"
>
	<div class="absolute inset-0 flex items-center justify-center bg-black/70">
		<div class="flex max-w-7xl flex-col items-center gap-y-5 px-2">
			<img src={logo2} alt="CryptoSharia Logo" class="fl-w-48/64" />
			<div class="flex flex-col items-center text-center text-background text-shadow-lg">
				<h1 class="fl-text-3xl/5xl font-semibold">CryptoSharia</h1>
				<p class="fl-text-base/xl">Platform Edukasi dan Informasi Aset Kripto Syariah</p>
			</div>
		</div>
	</div>
</section>
