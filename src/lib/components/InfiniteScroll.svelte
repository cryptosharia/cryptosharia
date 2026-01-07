<script lang="ts">
	import { cn } from '$lib/utils';

	let {
		duration = 10,
		pauseOnHover = true,
		direction = 'left',
		gap = 'gap-16',
		children
	}: {
		duration?: number;
		pauseOnHover?: boolean;
		direction?: 'left' | 'right';
		gap?: string;
		children: any;
	} = $props();

	const animationDirection = $derived(direction === 'left' ? 'scroll-left' : 'scroll-right');
</script>

<div class="relative w-full overflow-hidden">
	<style>
		@keyframes scroll-left {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-50%);
			}
		}

		@keyframes scroll-right {
			from {
				transform: translateX(-50%);
			}
			to {
				transform: translateX(0);
			}
		}
	</style>

	<!-- Gradient overlays for fade effect -->
	<div
		class="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-linear-to-r from-black to-transparent"
	></div>
	<div
		class="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-linear-to-l from-black to-transparent"
	></div>

	<!-- Scrolling content -->
	<div
		class={cn('flex', gap, pauseOnHover && 'hover:paused')}
		style:animation="{animationDirection}
		{duration}s linear infinite"
		style:will-change="transform"
	>
		<!-- First set -->
		{@render children()}

		<!-- Duplicate set for seamless loop -->
		{@render children()}
	</div>
</div>
