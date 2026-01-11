<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & { opacity?: number };
	let { opacity = 70, class: className, children, ...rest }: Props = $props();
</script>

<div
	style:--color="rgba(0, 0, 0, {opacity / 100})"
	class={cn('size-full bg-(--color)', className)}
	{...rest}
>
	{@render children?.()}
</div>
