<script>
  import Grid from '$lib/icons/Grid.svelte';
  import Chat from '$lib/icons/Chat.svelte';
  import Calendar from '$lib/icons/Calendar.svelte';
  import Mark from '$lib/icons/Mark.svelte';
</script>

<section>
  <a class="nav-section-item active" href="/app">
    <Grid />
    <span class="uppercase">Memo</span>
  </a>
  <a class="nav-section-item" href="/app">
    <Chat />
    <span>微信输入</span>
  </a>
  <a class="nav-section-item" href="/app">
    <Calendar />
    <span>每日回顾</span>
  </a>
  <a class="nav-section-item" href="/app">
    <Mark />
    <span>随机漫步</span>
  </a>
</section>

<style style lang="postcss">
  .nav-section-item {
    @apply px-2 py-1.5;
    @apply -mx-2;
    @apply flex flex-row items-center;
    @apply rounded;
    @apply text-gray-500;
  }

  .nav-section-item.active {
    @apply text-gray-100;
    @apply bg-green-500;
  }

  .nav-section-item > span {
    @apply ml-2 text-sm;
  }
</style>
