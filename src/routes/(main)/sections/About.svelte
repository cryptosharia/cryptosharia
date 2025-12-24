<script lang="ts">
	import btc from '$lib/assets/icons/btc.png';
	import eth from '$lib/assets/icons/eth.png';
	import sol from '$lib/assets/icons/sol.png';
	import sui from '$lib/assets/icons/sui.png';
	import PageSection from '$lib/components/PageSection.svelte';
	import Title from '$lib/components/Title.svelte';

	const goals = [
		'Menjadi pusat edukasi dan informasi aset crypto sesuai syariah di Indonesia.',
		'Menjadi wadah kolaborasi aktif dan produktif bagi para pelaku industri Web3 di Indonesia.',
		'Mendukung tranformasi ekonomi digital di Indonesia melalui prinsip keuangan syariah.'
	];
</script>

{#snippet line(device: 'desktop' | 'mobile')}
	{#if device === 'desktop'}
		<div class="mx-8 hidden border-r-2 border-primary/35 md:block lg:mx-12"></div>
	{:else}
		<div class="mr-8 ml-6 border-r-2 border-primary/35 md:hidden lg:mx-12"></div>
	{/if}
{/snippet}

<PageSection class="flex flex-col items-stretch justify-between md:flex-row">
	<div class="flex-1 rounded-4xl border border-border bg-card p-8 shadow-lg">
		<Title size="sm" useSeparator={false} class="text-left"
			>Tentang <u><i>CryptoSharia</i></u></Title
		>
		<p class="text-justify">
			<i><b>Crypto Sharia</b></i> adalah komunitas pionir yang menghubungkan dunia crypto dengan prinsip
			syariah, menghadirkan ekosistem edukasi, riset, dan komunitas terpercaya bagi teman-teman muslim
			yang tertarik untuk berinvestasi aset digital crypto tapi masih sesuai dengan prinsip-prinsip syariah.
		</p>
		<div class="flex flex-row items-center justify-around gap-6 pt-6">
			<img src={btc} alt="Bitcoin" class="size-8" />
			<img src={eth} alt="Ethereum" class="size-8" />
			<img src={sol} alt="Solana" class="size-8" />
			<img src={sui} alt="Sui" class="size-8" />
		</div>
	</div>
	{@render line('desktop')}
	<div class="flex flex-1 flex-row items-stretch p-8 pb-0 pl-0 md:flex-col xl:pr-9">
		{@render line('mobile')}
		<div>
			<div>
				<Title size="sm" useSeparator={false} class="text-left">Community Goals</Title>
				<ul>
					{#each goals as goal}
						<li class="relative mb-2">
							<div
								class="absolute top-1.5 -left-9.75 size-3 rounded-full bg-primary lg:-left-13.75"
							></div>
							{goal}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</PageSection>
