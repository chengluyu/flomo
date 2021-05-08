<div
  class="overlay"
  tabindex="0"
  role="button"
  aria-pressed="false"
  on:click
  on:wheel={(e) => {
    e.preventDefault();
  }}
/>

<style style lang="postcss">
  .overlay {
    @apply fixed top-0 right-0 bottom-0 left-0;
    @apply bg-gray-900 opacity-5 z-40;
  }
</style>
