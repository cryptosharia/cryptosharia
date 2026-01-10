<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import { pembina1, pembina2, pembina3, pembina4, pembina5 } from '$lib/assets/team';
	import PageSection from '$lib/components/PageSection.svelte';

	const people = [
		{
			name: 'K.H. Izzuddin Edi Siswanto, Lc., M.A., Ph.D.',
			bio: 'Members of DSN-MUI & DPS Dompet Dhuafa',
			image: pembina1
		},
		{
			name: 'Ustadz Ali Hasan Bawazier',
			bio: 'Chairman of the DPP Al Irsyad Association',
			image: pembina2
		},
		{
			name: 'Ustadz Devin Halim Wijaya, B.B.A., M. Sc.',
			bio: 'B.B.A. Administrative Management (LIPIA, Indonesia), & M.Sc. Islamic Economics (IIUM, Malaysia)',
			image: pembina3
		},
		{
			name: 'Ustadz Tengku M. Laksamana, B.Sc., B.A.',
			bio: 'B.Sc. Computer Science (USQ, Australia), B.A. Sharia (Al Rayyan, Yemen), & M.A. Islamic Economics (UIN Samarinda, ongoing)',
			image: pembina4
		},
		{
			name: 'Dea Saka Kurnia Putra, S.Tr.MP',
			bio: 'Founder of Asosiasi Aset Kripto Syariah Indonesia (AKSI) & Blockchain Society',
			image: pembina5
		}
	];
</script>

{#snippet personCard(image: string, name: string, bio: string)}
	<div class="w-62 text-center">
		<img
			src={image}
			alt={name}
			class="mb-2 h-62 w-full rounded-2xl object-cover transition-transform hover:scale-105"
		/>
		<h2 class="text-xl font-semibold text-primary">{name}</h2>
		<p class="text-sm text-muted-foreground">{bio}</p>
	</div>
{/snippet}

<PageSection id="team" class="flex flex-col items-center">
	<Title>CryptoSharia Team</Title>

	<div class="flex w-full flex-row flex-wrap items-start justify-center fl-gap-x-8/40 gap-y-8">
		{#each people as person (person.name)}
			{@render personCard(person.image, person.name, person.bio)}
		{/each}
	</div>
</PageSection>
