<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLHeadingElement> & {
		size?: 'sm' | 'md';
	};

	let { size = 'md', class: className, children, ...rest }: Props = $props();
</script>

<h2
	class={cn(
		'mb-1.5 font-bold text-orange-600',
		size === 'sm' && 'fl-text-2xl/3xl',
		size === 'md' && 'fl-text-3xl/4xl',
		className
	)}
	{...rest}
>
	{@render children?.()}
</h2>
