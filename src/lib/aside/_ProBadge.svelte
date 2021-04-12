<script lang="ts">
  export let enabled = false;
</script>

<button
  class="px-1 ml-2 bg-gray-400 text-gray-50 text-sm font-semibold rounded focus:outline-none"
  class:bg-gray-800={enabled}
  on:click={() => (enabled = !enabled)}
>
  PRO
</button>
