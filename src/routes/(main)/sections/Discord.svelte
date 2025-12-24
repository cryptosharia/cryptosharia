<script lang="ts">
	import GradientDivider from '$lib/components/GradientDivider.svelte';
	import discordBg from '$lib/assets/discord-bg.avif';
	import DarkOverlay from '$lib/components/DarkOverlay.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
</script>

<div>
	<GradientDivider />
	<div
		id="discord"
		style:--bg-image="url({discordBg})"
		class="h-200 w-full bg-(image:--bg-image) bg-cover bg-fixed bg-center bg-no-repeat"
	>
		<DarkOverlay class="text-background">
			<PageSection>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi laborum eius facere
				aspernatur veritatis autem. Exercitationem, nihil voluptatum ipsum non debitis fugit cum,
				eveniet dicta rerum dolore sint vero beatae.
			</PageSection>
		</DarkOverlay>
	</div>
	<GradientDivider reversed />
</div>
