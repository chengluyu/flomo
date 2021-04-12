<script lang="ts">
  import TagList from '$lib/aside/TagList.svelte';
  import Dots from '$lib/icons/Dots.svelte';
  import type { Entry } from 'src/store/entries';
  import CardTag from './_CardTag.svelte';

  export let entry: Entry;
</script>

<article
  class="pl-5 pr-4 pt-4 pb-5 bg-white rounded transition-shadow duration-300 ease-in-out hover:shadow-lg"
>
  <header>
    <div class="flex flex-row items-center">
      <div class="text-sm ordinal proportional-nums text-gray-500">
        {entry.date.toLocaleString()}
      </div>
      <button class="ml-auto text-gray-400 focus:outline-none"><Dots /></button>
    </div>
    <div class="mt-2 text-sm space-x-1.5">
      {#each entry.tags as tag}
        <CardTag>{tag}</CardTag>
      {/each}
    </div>
  </header>
  <main class="mt-2">
    <p>
      {@html entry.html}
    </p>
  </main>
</article>
