<script>
  import TagListItem from './_TagListItem.svelte';
</script>

<section class="space-y-2">
  <header class="text-xs font-bold text-gray-500">最近标签</header>
  <main class="flex flex-col space-y-1">
    <TagListItem tag="welcome" />
    <TagListItem tag="collection" />
    <TagListItem tag="tutorial" />
  </main>
  <footer>
    <a class="text-sm text-gray-500" href="/app/tags/all">查看全部标签</a>
  </footer>
</section>
