<script lang="ts">
	import {
		background,
		fasset,
		halalKulture,
		tadzimulQuranAnNaajiyah,
		berbagiLink
	} from '$lib/assets/partners';
	import DarkOverlay from '$lib/components/DarkOverlay.svelte';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';

	const BRANDS = [
		{
			name: 'Fasset',
			logo: fasset,
			url: 'https://fasset.id'
		},
		{
			name: 'Halal Kulture',
			logo: halalKulture,
			url: 'https://halalkulturemarket.com'
		},
		{
			name: 'Tadzimul Qur’an An-Naajiyah',
			logo: tadzimulQuranAnNaajiyah,
			url: 'https://annaajiyah.sch.id'
		},
		{
			name: 'BerbagiLink',
			logo: berbagiLink,
			url: 'https://berbagi.link'
		}
	];

	// Repeat the brands to ensure the content is wide enough for a seamless infinite scroll effect.
	const SCROLLER_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS];
</script>

<section id="partners" class="w-full">
	<div class="h-48 w-full bg-cover bg-center" style:background-image="url({background})">
		<DarkOverlay class="h-full">
			<InfiniteScroll class="h-full items-center justify-center gap-16">
				{#each SCROLLER_BRANDS as brand, i (i)}
					<div class="flex h-20 w-40 shrink-0 items-center justify-center">
						<a
							href={brand.url}
							target="_blank"
							rel="noopener noreferrer"
							class="transition-transform hover:scale-110"
						>
							<img src={brand.logo} alt={brand.name} class="max-h-full max-w-full object-contain" />
						</a>
					</div>
				{/each}
			</InfiniteScroll>
		</DarkOverlay>
	</div>
</section>
