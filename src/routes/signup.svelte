<script lang="ts">
  import Logo from '$lib/Logo.svelte';

  let email = '';
  let password = '';
  let confirmPassword = '';
</script>

<svelte:head>
  <title>重设密码</title>
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
    type="new-password"
    name="new-password"
    id="new-password"
    bind:value={password}
    placeholder="密码"
  />
  <input
    class="form-input-field"
    type="confirm-password"
    name="confirm-password"
    id="confirm-password"
    bind:value={confirmPassword}
    placeholder="再次输入密码"
  />
  <button class="signup-button">注册</button>
  <a class="go-to-login" href="/login">登录</a>
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

  .signup-button {
    @apply w-full;
    @apply font-medium;
    @apply text-gray-50 bg-blue-500;
    @apply py-2;
    @apply rounded;
  }

  .go-to-login {
    @apply font-medium text-blue-500;
  }
</style>
