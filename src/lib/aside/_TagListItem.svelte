<script lang="ts">
  import Dots from '$lib/icons/Dots.svelte';
  import { page } from '$app/stores';

  export let tag: string;
</script>

<div class="tag" class:active={$page.params.tag === tag}>
  <a class="flex-1" href={`/app/tags/${tag}`}>{tag}</a>
  <button class="menu-button"><Dots /></button>
</div>

<style style lang="postcss">
  .tag {
    @apply px-2 py-1;
    @apply -mx-2;
    @apply rounded;
    @apply flex flex-row items-center;
    @apply text-gray-500;
    @apply transition-colors duration-150 ease-in-out;
    @apply hover:bg-gray-200;
  }

  .tag::before {
    content: '#';
    @apply mr-1;
  }

  .tag.active {
    @apply text-gray-100;
    @apply bg-green-500;
  }

  .menu-button {
    @apply ml-auto opacity-0;
    @apply transition-opacity duration-150 ease-in-out;
  }

  .tag:hover > button {
    @apply opacity-100;
  }
</style>
