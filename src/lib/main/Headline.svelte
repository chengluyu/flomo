<script lang="ts">
  import Search from './_Search.svelte';
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  const info = derived(page, ({ path, params }) => {
    if (/^\/app\/?$/.test(path)) {
      return { title: 'MEMO', search: true };
    }
    if (/^\/app\/tags\/?/.test(path)) {
      return typeof params.tag === 'string'
        ? { title: '#' + params.tag, search: true }
        : { title: '标签', search: false };
    }
    if (path.startsWith('/app/wechat')) {
      return { title: '微信输入', search: true };
    }
    if (path.startsWith('/app/notify')) {
      return { title: '每日回顾', search: false };
    }
    if (path.startsWith('/app/lucky')) {
      return { title: '随机漫步', search: false };
    }
    return { title: path, search: true };
  });
</script>

<header class="w-full flex flex-row items-center">
  <h1 class="text-xl font-medium text-gray-600">{$info.title}</h1>
  {#if $info.search}
    <Search />
  {/if}
</header>
