<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	let { children, class: className }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<section class={cn('mx-auto max-w-7xl fl-px-2.5/5', className)}>
	{@render children?.()}
</section>
