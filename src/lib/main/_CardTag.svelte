<span class="tag"><slot /></span>

<style style lang="postcss">
  .tag {
    @apply px-1.5 py-0.5 rounded bg-blue-100 text-blue-500;
    @apply transition-colors duration-300 ease-in-out;
    @apply hover:bg-blue-500 hover:text-white;
  }
</style>
