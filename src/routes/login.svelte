<script lang="ts">
  import Logo from '$lib/Logo.svelte';

  let email = '';
  let password = '';
</script>

<svelte:head>
  <title>登录</title>
</svelte:head>

<main
  class="flex flex-col items-center space-y-2 fixed top-1/2 left-1/2 w-80 transform -translate-x-1/2 -translate-y-1/2"
>
  <Logo />
  <input
    class="form-input-field"
    type="text"
    name="email"
    id="email"
    bind:value={email}
    placeholder="邮箱"
  />
  <input
    class="form-input-field"
    type="password"
    name="password"
    id="password"
    bind:value={password}
    placeholder="密码"
  />
  <button class="login-button">登录</button>
  <a class="reset-password-link" href="/recovery">忘记密码</a>
</main>

<style style lang="postcss">
  :root {
    @apply bg-gray-50;
  }
  .form-input-field {
    @apply w-full px-4 py-2;
    @apply border border-gray-200;
    @apply rounded;
    @apply focus:outline-none focus:border-blue-400;
  }

  .login-button {
    @apply w-full;
    @apply font-medium;
    @apply text-gray-50 bg-blue-500;
    @apply py-2;
    @apply rounded;
  }

  .reset-password-link {
    @apply font-medium text-blue-500;
  }
</style>
