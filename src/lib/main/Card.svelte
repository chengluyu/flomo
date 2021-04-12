<script lang="ts">
  import Dots from '$lib/icons/Dots.svelte';
  import CardTag from './_CardTag.svelte';

  export let date: Date = new Date();
</script>

<article
  class="pl-5 pr-4 pt-4 pb-5 bg-white rounded transition-shadow duration-300 ease-in-out hover:shadow-lg"
>
  <header>
    <div class="flex flex-row items-center">
      <div class="text-sm ordinal proportional-nums text-gray-500 font-medium">
        {date.toLocaleDateString()}
      </div>
      <button class="ml-auto text-gray-400 focus:outline-none"><Dots /></button>
    </div>
    <div class="mt-2 text-sm">
      <CardTag>Test</CardTag>
    </div>
  </header>
  <main class="mt-2">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit autem molestiae
      dolorum odio officia. Distinctio et in debitis repellendus vel eos doloribus provident saepe
      fuga hic reiciendis, ad id!
    </p>
  </main>
</article>
