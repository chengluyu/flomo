<script>
  import Preferences from '$lib/icons/Preferences.svelte';
  import ProBadge from './_ProBadge.svelte';
</script>

<section class="flex flex-row items-center">
  <div class="text-lg text-gray-600 font-medium">User</div>
  <ProBadge />
  <button class="ml-auto text-gray-600">
    <Preferences />
  </button>
</section>
