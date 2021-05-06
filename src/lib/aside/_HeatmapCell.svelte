<script lang="ts">
  import { onMount } from 'svelte';

  import tippy from 'tippy.js';
  import type { Instance } from 'tippy.js';

  export let date: Date;

  $: dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  let cell: HTMLDivElement;
  let tippyInstance: Instance;

  onMount(() => {
    tippyInstance = tippy(cell, {
      content: `0 memos on ${dateString}`
    });
  });
</script>

<div class="cell" bind:this={cell} />

<style style lang="postcss">
  .cell {
    @apply w-4 h-4 bg-gray-200 rounded-sm border border-transparent;
    @apply hover:border-green-400;
  }
</style>
