<script lang="ts">
  import Dots from '$lib/icons/Dots.svelte';
  import { tags } from '../../../store/entries';
</script>

<div class="grid grid-cols-2 gap-4">
  <section>
    <h2>全部</h2>
    {#each $tags as tag}
      <div class="tag">
        <a href={`/app/tags/${tag}`}>#{tag}</a>
        <button><Dots /></button>
      </div>
    {/each}
  </section>
  <section>
    <h2>置顶</h2>
    {#each $tags as tag}
      <div class="tag">
        <a href={`/app/tags/${tag}`}>#{tag}</a>
        <button><Dots /></button>
      </div>
    {/each}
  </section>
</div>

<style style lang="postcss">
  section {
    @apply px-4 pt-3 pb-2;
    @apply bg-white;
    @apply rounded-md;
    @apply space-y-2;
  }

  h2 {
    @apply font-medium;
  }

  .tag {
    @apply flex items-center;
    @apply -mx-2 px-2 py-1;
    @apply rounded-md;
    @apply transition-colors duration-200 ease-in-out;
    @apply hover:bg-gray-200;
  }

  .tag > a {
    @apply flex-1;
  }

  .tag > button {
    @apply opacity-0;
    @apply transition-opacity duration-200 ease-in-out;
  }

  .tag:hover > button {
    @apply opacity-100;
  }
</style>
