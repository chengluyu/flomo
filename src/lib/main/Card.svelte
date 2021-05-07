<script lang="ts">
  import Dots from '$lib/icons/Dots.svelte';
  import type { Entry } from 'src/store/entries';

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
  </header>
  <main class="mt-2 prose">
    {@html entry.html}
  </main>
</article>
