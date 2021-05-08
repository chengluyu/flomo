<script lang="ts">
  import Dots from '$lib/icons/Dots.svelte';
  import Menu from '$lib/menu/Menu.svelte';
  import MenuItem from '$lib/menu/MenuItem.svelte';
  import Overlay from '$lib/Overlay.svelte';
  import type { Entry } from 'src/store/entries';

  export let entry: Entry;

  let showMenu = false;
</script>

<article
  class="pl-5 pr-4 pt-4 pb-5 bg-white rounded transition-shadow duration-300 ease-in-out hover:shadow-lg"
>
  <header>
    <div class="flex flex-row items-center">
      <div class="text-sm ordinal proportional-nums text-gray-500">
        {entry.date.toLocaleString()}
      </div>
      <div class="relative ml-auto">
        <button
          class="text-gray-400 focus:outline-none"
          on:click={() => {
            showMenu = true;
          }}
        >
          <Dots />
        </button>
        {#if showMenu}
          <Overlay
            on:click={() => {
              showMenu = false;
            }}
          />
          <Menu>
            <MenuItem>分享</MenuItem>
            <MenuItem>批注</MenuItem>
            <MenuItem>编辑</MenuItem>
            <MenuItem>删除</MenuItem>
          </Menu>
        {/if}
      </div>
    </div>
  </header>
  <main class="mt-2 prose">
    {@html entry.html}
  </main>
</article>
