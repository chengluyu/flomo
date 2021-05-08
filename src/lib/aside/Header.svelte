<script>
  import Preferences from '$lib/icons/Preferences.svelte';
  import Menu from '$lib/menu/Menu.svelte';
  import MenuItem from '$lib/menu/MenuItem.svelte';
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
      <Menu>
        <MenuItem><span role="img" aria-label="user">👤</span>账号详情</MenuItem>
        <MenuItem><span role="img" aria-label="gift">🎁</span>有些福利</MenuItem>
        <MenuItem><span role="img" aria-label="tools">🛠</span>API 及第三方工具</MenuItem>
        <MenuItem><span role="img" aria-label="weibo">👁️</span>官方微博</MenuItem>
        <MenuItem><span role="img" aria-label="help">🤔</span>帮助</MenuItem>
        <MenuItem><span role="img" aria-label="feedback">👾</span>反馈</MenuItem>
        <MenuItem><span role="img" aria-label="bye">👋</span>退出</MenuItem>
      </Menu>
    {/if}
  </div>
</section>

<style style lang="postcss">
  span[role='img'] {
    @apply mr-2;
  }
</style>
