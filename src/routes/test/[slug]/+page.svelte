<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.post.title}</h1>
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
<div>{@html data.post.content}</div>

{#await data.comments}
	Loading comments...
{:then comments}
	{#each comments as comment (comment)}
		<p>{comment}</p>
	{/each}
{:catch error}
	<p>error loading comments: {error.message}</p>
{/await}
