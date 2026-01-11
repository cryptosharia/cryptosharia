<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let {
		maxWidth = '7xl',
		children,
		class: className,
		...rest
	}: HTMLAttributes<HTMLElement> & {
		maxWidth?: '7xl' | '6xl' | '5xl';
	} = $props();
</script>

<section
	class={cn(
		'mx-auto fl-px-2.5/5',
		{
			'max-w-7xl': maxWidth === '7xl',
			'max-w-6xl': maxWidth === '6xl',
			'max-w-5xl': maxWidth === '5xl'
		},
		className
	)}
	{...rest}
>
	{@render children?.()}
</section>
