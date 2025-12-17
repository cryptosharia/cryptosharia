<script lang="ts">
  let { usePadding = true }: { usePadding?: boolean } = $props();
</script>

<span
  class="mx-auto my-1.5 block border border-b-0 border-slate-300"
  class:w-[90%]={usePadding}
  class:w-full={!usePadding}
></span>
