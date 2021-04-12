<script lang="ts">
  import Logo from '$lib/Logo.svelte';
</script>

<svelte:head>
  <title>Hello world!</title>
</svelte:head>

<main class="pt-8 pb-10 mx-auto max-w-4xl min-h-screen flex flex-col">
  <header class="flex flex-row">
    <Logo />
    <nav class="ml-auto space-x-4">
      <a class="hover:underline" href="/signup">注册</a>
      <a class="hover:underline" href="/login">登录</a>
      <a class="hover:underline" href="/app">直接使用</a>
    </nav>
  </header>
  <section class="my-auto flex flex-col items-center text-center">
    <h2 class="text-4xl font-semibold">
      重要的不是记录，<span class="text-green-500">而是更好地思考</span>
    </h2>
    <p class="mt-2 text-gray-300">
      What makes differences is independent thinking about the words, not just note-taking
    </p>
    <p class="mt-10 text-gray-600 font-semibold">
      绝大多数笔记产品都进入了误区，聚焦在「文档编辑」「剪藏文章」或「All in one」
      <br />
      而忽略了记笔记最根本的目的 —— 更好地思考
    </p>
  </section>
  <footer class="mt-auto flex flex-col items-center">
    <div>
      <a class="underline" href="https://github.com/chengluyu/flomo">关于</a>
      <span class="mx-0 5">|</span>
      <a class="underline" href="https://github.com/chengluyu/flomo">GitHub</a>
    </div>
  </footer>
</main>

<style>
</style>
