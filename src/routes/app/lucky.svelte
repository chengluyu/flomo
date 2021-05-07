<script lang="ts">
  function range(n: number): number[] {
    const numbers = [];
    for (let i = 0; i < n; i++) {
      numbers.push(n);
    }
    return numbers;
  }
</script>

<p>这些标签未曾记录，却隐藏在文本之后</p>

<section class="grid grid-cols-1 md:grid-cols-2 grid-rows-8 gap-x-6 gap-y-4">
  {#each range(16) as _}
    <article class="p-4 flex items-center bg-gray-50 rounded-md">
      <div>■■■■■</div>
      <div class="ml-auto text-gray-500">42 memos</div>
    </article>
  {/each}
</section>
