<script>
  import Statistics from '$lib/aside/Statistics.svelte';
  import Heatmap from '$lib/aside/Heatmap.svelte';
  import NavMenu from '$lib/aside/NavMenu.svelte';
  import TagList from '$lib/aside/TagList.svelte';
  import Header from '$lib/aside/Header.svelte';
  import Headline from '$lib/main/Headline.svelte';
  import Editor from '$lib/main/Editor.svelte';
  import Card from '$lib/main/Card.svelte';
  import { entries } from '../store/entries';
</script>

<div class="mx-auto max-w-4xl grid grid-cols-app gap-8">
  <aside class="py-4 space-y-4">
    <Header />
    <Statistics />
    <Heatmap />
    <NavMenu />
    <TagList />
  </aside>
  <main class="py-4 space-y-4">
    <Headline />
    <Editor />
    {#each $entries as entry}
      <Card {entry} />
    {/each}
  </main>
</div>

<style>
</style>
