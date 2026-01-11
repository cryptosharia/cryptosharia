<script lang="ts">
	import { PageSection, Title } from '$lib/components/layout';
	import { Button } from '$lib/components/ui/button';
</script>

<PageSection id="activities">
	<Title>Aktivitas Kami</Title>
	<div class="flex w-full flex-col items-center gap-y-6 md:gap-y-8 lg:gap-y-10">
		<Button href="/blog/aktivitas" size="default" class="hidden md:block">
			Lihat Aktivitas Lainnya
		</Button>
		<Button href="/blog" size="sm" class="block md:hidden">Lihat Aktivitas Lainnya</Button>
	</div>
</PageSection>
