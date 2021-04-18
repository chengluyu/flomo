<script>
  import Grid from '$lib/icons/Grid.svelte';
  import Chat from '$lib/icons/Chat.svelte';
  import Calendar from '$lib/icons/Calendar.svelte';
  import Mark from '$lib/icons/Mark.svelte';
  import { page } from '$app/stores';
</script>

<section>
  <a class="nav-section-item" class:active={$page.path === '/app'} href="/app">
    <Grid />
    <span class="uppercase">Memo</span>
  </a>
  <a
    class="nav-section-item"
    class:active={$page.path.startsWith('/app/wechat')}
    href="/app/wechat"
  >
    <Chat />
    <span>微信输入</span>
  </a>
  <a
    class="nav-section-item"
    class:active={$page.path.startsWith('/app/notify')}
    href="/app/notify"
  >
    <Calendar />
    <span>每日回顾</span>
  </a>
  <a class="nav-section-item" class:active={$page.path.startsWith('/app/lucky')} href="/app/lucky">
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
