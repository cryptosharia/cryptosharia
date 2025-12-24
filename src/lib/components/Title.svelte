<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Separator } from './ui/separator';

	type Props = HTMLAttributes<HTMLHeadingElement> & {
		size?: 'sm' | 'md';
		useSeparator?: boolean;
	};

	let { size = 'md', useSeparator = true, class: className, children, ...rest }: Props = $props();
</script>

<div data-slot="title" class={cn('w-full text-center font-bold text-primary', className)}>
	<h2
		class={cn('mb-1.5', size === 'sm' && 'fl-text-2xl/3xl', size === 'md' && 'fl-text-3xl/4xl')}
		{...rest}
	>
		{@render children?.()}
	</h2>
	{#if useSeparator}
		<Separator class="mb-6" />
	{/if}
</div>
