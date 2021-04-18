<script>
  import TagListItem from './_TagListItem.svelte';
  import { tags } from '../../store/entries';
</script>

<section class="space-y-2">
  <header class="text-xs font-bold text-gray-500">最近标签</header>
  <main class="flex flex-col space-y-1">
    {#each $tags as tag}
      <TagListItem {tag} />
    {/each}
  </main>
  <footer>
    <a class="text-sm text-gray-500" href="/app/tags">查看全部标签</a>
  </footer>
</section>
