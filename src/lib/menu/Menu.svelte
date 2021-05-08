<div class="menu space-y-2" role="menu">
  <slot />
</div>

<style style lang="postcss">
  .menu {
    @apply absolute top-8 left-1/2 w-max;
    @apply px-5 py-4;
    @apply bg-white;
    @apply flex flex-col items-start;
    @apply rounded-md shadow-md;
    @apply text-sm text-gray-500 font-semibold;
    @apply z-50;
    @apply transform -translate-x-1/2;
  }
</style>
