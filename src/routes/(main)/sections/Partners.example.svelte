<script lang="ts">
	import InfiniteScroll from '$lib/components/InfiniteScroll.svelte';

	// Example: Partner logos
	const partners = [
		{ name: 'Company A', logo: '/logos/company-a.png' },
		{ name: 'Company B', logo: '/logos/company-b.png' },
		{ name: 'Company C', logo: '/logos/company-c.png' },
		{ name: 'Company D', logo: '/logos/company-d.png' },
		{ name: 'Company E', logo: '/logos/company-e.png' }
	];
</script>

<section class="py-20">
	<h2 class="mb-10 text-center text-3xl font-bold">Our Partners</h2>

	<InfiniteScroll duration={40} gap="gap-20">
		{#each partners as partner}
			<div class="flex h-20 w-40 shrink-0 items-center justify-center">
				<img
					src={partner.logo}
					alt={partner.name}
					class="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
				/>
			</div>
		{/each}
	</InfiniteScroll>
</section>
