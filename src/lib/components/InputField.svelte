<script lang="ts">
  let {
    id,
    type = 'text',
    required = false,
    label,
    hint
  }: {
    id: string;
    required?: boolean;
    label: string;
    hint: string;
    type?: 'text' | 'email' | 'multiline';
  } = $props();
</script>

<div>
  <label for="input" class="ml-0.5 block text-lg font-semibold text-white">{label}</label>
  {#if type !== 'multiline'}
    <input
      {id}
      {type}
      {required}
      placeholder={hint}
      class="mt-0.5 w-full rounded-lg border border-slate-200 bg-white p-2 shadow-lg focus:ring focus:ring-orange-600 focus:ring-offset-2 focus:outline-none"
    />
  {:else}
    <textarea
      {id}
      {required}
      placeholder={hint}
      class="mt-0.5 block h-28 w-full resize-none rounded-lg border border-slate-200 bg-white p-2 shadow-lg focus:ring focus:ring-orange-600 focus:ring-offset-2 focus:outline-none"
    ></textarea>
  {/if}
</div>

<style>
  ::placeholder {
    color: var(--color-slate-400);
  }
</style>
