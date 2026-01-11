<!-- 
How It Works

This Svelte component creates a seamless, infinite scrolling effect for any content you place inside it. Here's a breakdown of how it achieves this:

1. Content Duplication: The core trick is content duplication. The component takes the content you provide (its children) and renders it twice, one after the other, inside a single
	container.

2. CSS Animation: It applies a CSS animation to this container. The animation uses transform: translateX() to continuously move the container horizontally.

3. The Seamless Loop: The animation is specifically designed to translate the container by exactly -50% of its own width. Since the container's total width is the sum of two identical sets
	of content, a -50% translation moves it by exactly the width of one set. The moment the first set has scrolled completely out of view, the second (duplicated) set has moved perfectly into
	its place. The infinite property on the animation then instantly resets it, creating a flawless and endless loop.

4. Consistent Speed Across Screen Sizes: A common problem with this technique is that if the content's width changes (e.g., on smaller screens), a fixed animation duration will make the
	scroll speed appear to change. This component solves that by:
		* Using JavaScript to continuously monitor the scroller's width with a ResizeObserver.
		* Dynamically calculating the required animation duration based on the measured width and the desired speed (slow, normal, or fast).
		* This ensures the content always moves at a consistent number of pixels per second, regardless of screen or content size.

5. Additional Features:
		* `direction`: You can set the scroll direction to left or right.
		* `pauseOnHover`: The animation can be set to pause when the user hovers their mouse over it.
		* Fade Effect: It adds a gradient overlay on the left and right edges to create a smooth fade-in and fade-out effect, enhancing the illusion of infinity. 
-->

<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	/**
	 * Props for the InfiniteScroll component.
	 * Extends standard HTML attributes for a div element.
	 */
	type Props = HTMLAttributes<HTMLDivElement> & {
		/**
		 * The desired scrolling speed.
		 * The component will dynamically adjust animation duration to maintain a consistent speed.
		 * @default 'normal'
		 */
		speed?: 'slow' | 'normal' | 'fast';
		/**
		 * If true, the animation will pause when the user hovers over the component.
		 * @default true
		 */
		pauseOnHover?: boolean;
		/**
		 * The direction of the scroll.
		 * @default 'left'
		 */
		direction?: 'left' | 'right';
	};

	let {
		speed = 'normal',
		pauseOnHover = true,
		direction = 'left',
		class: className,
		children
	}: Props = $props();

	/**
	 * Determines the CSS animation name based on the scroll direction.
	 */
	let animation = $derived(direction === 'left' ? 'infinite-scroll-left' : 'infinite-scroll-right');

	/**
	 * A reference to the main scrolling container element.
	 */
	let scrollerEl: HTMLDivElement | undefined;

	/**
	 * The calculated duration of the animation in seconds.
	 * This value is reactive and will be updated dynamically based on the scroller's width.
	 * The initial value is 0, but will be changed after the component mounts.
	 */
	let duration = $state(0);

	/**
	 * Maps the speed prop to a pixels-per-second value.
	 * A higher value means a faster scroll (and thus a shorter animation duration).
	 */
	const SPEED_MAP = {
		slow: 20,
		normal: 40,
		fast: 80
	};

	onMount(() => {
		// Ensure the element is mounted before proceeding.
		if (!scrollerEl) return;

		/**
		 * Calculates the animation duration based on the scroller's width and desired speed.
		 * This ensures the scroll speed is consistent regardless of content or screen size.
		 */
		const calculateDuration = () => {
			if (scrollerEl) {
				const scrollerWidth = scrollerEl.scrollWidth;
				const pixelsPerSecond = SPEED_MAP[speed];
				// The animation travels 50% of the total width (which is one full copy of the content).
				// duration = distance / speed
				duration = scrollerWidth / 2 / pixelsPerSecond;
			}
		};

		// Calculate the initial duration.
		calculateDuration();

		// Create a ResizeObserver to automatically recalculate the duration
		// whenever the scroller's size changes.
		const resizeObserver = new ResizeObserver(calculateDuration);

		resizeObserver.observe(scrollerEl);

		// Cleanup: Disconnect the observer when the component is destroyed
		// to prevent memory leaks.
		return () => resizeObserver.disconnect();
	});
</script>

<div class="relative size-full overflow-hidden">
	<!-- Gradient overlays create a fade effect on the edges, enhancing the infinite illusion. -->
	<div
		class="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-linear-to-r from-black to-transparent"
	></div>
	<div
		class="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-linear-to-l from-black to-transparent"
	></div>

	<!-- This is the main scrolling container. -->
	<div
		bind:this={scrollerEl}
		class={cn('flex w-max flex-nowrap', className)}
		style:animation="{animation}
		{duration}s linear infinite"
		style:will-change="transform"
		role="list"
		onmouseenter={() => {
			if (pauseOnHover && scrollerEl) {
				scrollerEl.style.animationPlayState = 'paused';
			}
		}}
		onmouseleave={() => {
			if (pauseOnHover && scrollerEl) {
				scrollerEl.style.animationPlayState = 'running';
			}
		}}
	>
		<!-- The original content is rendered here. -->
		{@render children?.()}

		<!-- The content is duplicated here to create the seamless loop. -->
		<!-- `aria-hidden="true"` prevents screen readers from reading the duplicated content. -->
		<!-- `class="contents"` makes this div's children behave like direct children of the flex container, preserving layout and gaps. -->
		<div class="contents" aria-hidden="true">
			{@render children?.()}
		</div>
	</div>
</div>

<style>
	:global {
		/*
		 * The keyframes define the horizontal scroll animation.
		 * It translates the container by -50% of its own width. Since the container
		 * holds two copies of the content, this moves it by exactly the width of
		 * one copy, creating a seamless loop.
		 */
		@keyframes infinite-scroll-left {
			from {
				transform: translateX(0);
			}
			to {
				transform: translateX(-50%);
			}
		}

		@keyframes infinite-scroll-right {
			from {
				transform: translateX(-50%);
			}
			to {
				transform: translateX(0);
			}
		}
	}
</style>
