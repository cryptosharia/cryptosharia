<script lang="ts">
  let { padding }: { padding?: string } = $props();

  if (!padding) {
    padding = '3rem';
  }
</script>

<div
  class="flex items-center justify-center gap-2"
  style="padding-top: {padding}; padding-bottom: {padding};"
>
  {#each [1, 2, 3] as _}
    <span class="size-2.5 rounded-full bg-slate-300"></span>
  {/each}
</div>
