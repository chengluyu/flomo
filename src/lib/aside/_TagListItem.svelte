<script lang="ts">
  import Dots from '$lib/icons/Dots.svelte';

  export let tag: string;
</script>

<div class="tag">
  <a class="flex-1" href={`/app`}>{tag}</a>
  <button class="menu-button"><Dots /></button>
</div>

<style>
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

  .menu-button {
    @apply ml-auto opacity-0;
    @apply transition-opacity duration-150 ease-in-out;
  }

  .tag:hover > button {
    @apply opacity-100;
  }
</style>
