<script lang="ts">
	import GradientDivider from '$lib/components/GradientDivider.svelte';
	import DarkOverlay from '$lib/components/DarkOverlay.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import Title from '$lib/components/Title.svelte';
	import {
		background,
		cryptoModule,
		halalCoinCallsDesktop,
		halalCoinCallsMobile,
		informationUpdateDesktop,
		informationUpdateMobile,
		posterDesktop,
		posterMobile,
		shariaModule
	} from '$lib/assets/discord';
	import * as t from '$lib/assets/discord/testimonials';
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';

	const testimonials = Object.values(t);
</script>

{#snippet sectionTitle(text: string)}
	<h3 class="text-center fl-text-xl/3xl font-bold text-primary-foreground italic">
		{text}
	</h3>
{/snippet}

<div>
	<GradientDivider />
	<div
		id="discord"
		style:--bg-image="url({background})"
		class="w-full bg-(image:--bg-image) bg-cover bg-fixed bg-center bg-no-repeat"
	>
		<DarkOverlay class="py-10">
			<PageSection maxWidth="6xl">
				<div class="flex flex-col gap-10 md:gap-20">
					<!-- Poster Section -->
					<div class="order-1 md:order-1">
						<Title
							size="lg"
							useSeparator={false}
							class="font-serif [-webkit-text-stroke:0.08rem_#fff]"
						>
							JOIN <span class="text-[#5865f2]">Discord Premium</span> CryptoSharia
						</Title>
						<img
							src={posterDesktop}
							alt="Discord Premium Poster"
							class="w-full rounded-3xl shadow-2xl max-md:hidden"
						/>
						<img
							src={posterMobile}
							alt="Discord Premium Poster"
							class="w-full rounded-2xl shadow-xl md:hidden"
						/>
					</div>

					<!-- Modules Section (Crypto & Sharia) -->
					<!-- Mobile: Crypto Top, Sharia Bottom (via flex-col-reverse on DOM [Sharia, Crypto]) -->
					<!-- Desktop: Sharia Left, Crypto Right -->
					<div class="order-2 flex flex-col-reverse gap-8 md:order-4 md:flex-row md:gap-10">
						<!-- Sharia Module -->
						<div class="flex flex-1 flex-col gap-4">
							{@render sectionTitle('Modul Syariah')}
							<img src={shariaModule} alt="Modul Syariah" class="w-full rounded-2xl shadow-lg" />
						</div>
						<!-- Crypto Module -->
						<div class="flex flex-1 flex-col gap-4">
							{@render sectionTitle('Modul Crypto')}
							<img src={cryptoModule} alt="Modul Crypto" class="w-full rounded-2xl shadow-lg" />
						</div>
					</div>

					<!-- Information Update Section -->
					<div class="order-3 flex flex-col gap-4 md:order-2">
						{@render sectionTitle('Update Informasi Terbaru')}
						<img
							src={informationUpdateDesktop}
							alt="Information Update"
							class="w-full rounded-3xl shadow-2xl max-md:hidden"
						/>
						<img
							src={informationUpdateMobile}
							alt="Information Update"
							class="w-full rounded-2xl shadow-xl md:hidden"
						/>
					</div>

					<!-- Halal Coin Calls Section -->
					<div class="order-4 flex flex-col gap-4 md:order-3">
						{@render sectionTitle('Sinyal Koin Halal')}
						<img
							src={halalCoinCallsDesktop}
							alt="Halal Coin Calls"
							class="w-full rounded-3xl shadow-2xl max-md:hidden"
						/>
						<img
							src={halalCoinCallsMobile}
							alt="Halal Coin Calls"
							class="w-full rounded-2xl shadow-xl md:hidden"
						/>
					</div>
				</div>
			</PageSection>
			<!-- Testimonials Section -->
			<div class="order-5 mt-10 flex flex-col gap-4 md:order-5 md:mt-20">
				{@render sectionTitle('Testimoni')}

				<InfiniteScroll gap="gap-8">
					{#each testimonials as testimonial, i}
						<img
							src={testimonial}
							alt="Testimonial {i + 1}"
							class="h-auto fl-w-[24rem/32rem] shrink-0 rounded-2xl border-2 border-primary-foreground shadow-lg"
						/>
					{/each}
				</InfiniteScroll>
			</div>
		</DarkOverlay>
	</div>
	<GradientDivider reversed />
</div>
