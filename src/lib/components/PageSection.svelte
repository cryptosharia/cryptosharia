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
	style:--max-w="var(--container-{maxWidth})"
	class={cn('mx-auto max-w-(--max-w) fl-px-2.5/5', className)}
	{...rest}
>
	{@render children?.()}
</section>
