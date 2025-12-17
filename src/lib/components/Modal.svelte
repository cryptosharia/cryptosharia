<script>
  let { modalVisible = $bindable(), children } = $props();

  let dialog = $state(); // HTMLDialogElement

  $effect(() => {
    if (modalVisible) dialog.showModal();
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
  bind:this={dialog}
  onclose={() => (modalVisible = false)}
  onclick={(e) => {
    if (e.target === dialog) dialog.close();
  }}
  style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);"
  class="rounded-xl border-2 border-slate-300 bg-white shadow-xl"
>
  <div class="p-2.5 md:p-4">
    <button
      aria-label="Close Pop Up"
      class="group absolute top-1.5 right-1.5 rounded-xl border border-slate-500 p-1.5 hover:cursor-pointer hover:border-orange-600 hover:bg-orange-600/10"
      onclick={() => dialog.close()}
    >
      <svg
        class="h-6 w-6 text-slate-500 group-hover:text-orange-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    {@render children?.()}
  </div>
</dialog>

<!-- <style>
  dialog {
    max-width: 32em;
    border-radius: 0.2em;
    border: none;
    padding: 0;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }
</style> -->

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.6);
  }
</style>
