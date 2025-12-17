<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    aos = true,
    isSmall = false,
    ...props
  }: { aos?: boolean; isSmall?: boolean; class?: string; children: Snippet } = $props();
</script>

<h2
  data-aos={aos ? 'zoom-out' : null}
  data-aos-duration={aos ? '1000' : null}
  class={`mb-1.5 font-bold text-orange-600 ${props.class || ''}`}
  class:text-4xl={!isSmall}
  class:text-3xl={isSmall}
>
  {@render props.children?.()}
</h2>
