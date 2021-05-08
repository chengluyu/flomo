<script>
  import Preferences from '$lib/icons/Preferences.svelte';
  import Overlay from '$lib/Overlay.svelte';
  import ProBadge from './_ProBadge.svelte';

  let showMenu = false;
</script>

<section class="flex flex-row items-center">
  <div class="text-lg text-gray-600 font-medium">User</div>
  <ProBadge />
  <div class="ml-auto relative">
    <button
      class="text-gray-600 focus:outline-none"
      on:click={() => {
        showMenu = !showMenu;
      }}
    >
      <Preferences />
    </button>
    {#if showMenu}
      <Overlay
        on:click={() => {
          showMenu = false;
        }}
      />
      <div class="menu space-y-2" role="menu">
        <button><span role="img" aria-label="user">👤</span>账号详情</button>
        <button><span role="img" aria-label="gift">🎁</span>有些福利</button>
        <button><span role="img" aria-label="tools">🛠</span>API 及第三方工具</button>
        <button><span role="img" aria-label="weibo">👁️</span>官方微博</button>
        <button><span role="img" aria-label="help">🤔</span>帮助</button>
        <button><span role="img" aria-label="feedback">👾</span>反馈</button>
        <button><span role="img" aria-label="bye">👋</span>退出</button>
      </div>
    {/if}
  </div>
</section>

<style style lang="postcss">
  .menu {
    @apply absolute top-10 left-1/2 w-max;
    @apply px-5 py-4;
    @apply bg-white;
    @apply flex flex-col items-start;
    @apply rounded-md shadow-md;
    @apply z-50;
    @apply transform -translate-x-1/2;
  }

  .menu span[role='img'] {
    @apply mr-2;
  }

  .menu > button {
    @apply w-full;
    @apply text-left;
    @apply focus:outline-none;
  }
</style>
