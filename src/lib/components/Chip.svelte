<script lang="ts">
  let {
    isSelected = false,
    text,
    onPress
  }: { isSelected?: boolean; text: string; onPress?: (text: string) => void } = $props();
</script>

<button
  class="rounded-xl border border-orange-600 px-2 py-1 text-orange-600 {!isSelected &&
    'transition-colors duration-300 ease-in-out hover:bg-orange-600/60'}"
  class:bg-orange-600={isSelected}
  class:text-white={isSelected}
  class:hover:cursor-pointer={!isSelected}
  class:hover:border-white={!isSelected}
  class:hover:text-white={!isSelected}
  class:font-semibold={isSelected}
  onclick={() => onPress?.(text)}
>
  {text}
</button>
