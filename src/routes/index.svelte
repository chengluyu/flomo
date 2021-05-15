<script lang="ts">
  import Logo from '$lib/Logo.svelte';


</script>

<svelte:head>
  <title>flume</title>
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
    <h2 class="text-4xl font-semibold">flume: 一个 flomo 的开源实现</h2>
    <p class="mt-2 text-gray-300">flume: an open-source alternative of flomo</p>
  </section>
  <section class="grid grid-cols-3 gap-4">
    <article class="feature-card">
      <p class="text-2xl font-medium mb-4">完全开源</p>
      <p class="text-gray-500">
        flume 的前端和后端都完全开源，你可以部署在自己的服务器上，也可以按照自己的想法进行扩展。
      </p>
    </article>
    <article class="feature-card">
      <p class="text-2xl font-medium mb-4">精简高效</p>
      <p class="text-gray-500">flume 的前端和后端都使用较为简单的方法实现，并且确保高效运行。</p>
    </article>
    <article class="feature-card">
      <p class="text-2xl font-medium mb-4">易于扩展</p>
      <p class="text-gray-500">使用流行的开源框架，并且预置了可供扩展的接口。</p>
    </article>
  </section>
  <footer class="mt-auto flex flex-col items-center">
    <div>
      <a class="underline" href="https://github.com/chengluyu/flomo">关于</a>
      <span class="mx-0 5">|</span>
      <a class="underline" href="https://github.com/chengluyu/flomo">GitHub</a>
    </div>
  </footer>
</main>

<style style lang="postcss">
  .feature-card {
    @apply p-6;
    @apply border border-gray-300;
    @apply rounded-lg shadow-md;
  }

</style>
