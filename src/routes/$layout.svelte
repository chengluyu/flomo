<script>
  import '../app.postcss';
  import '../app.scss';
</script>

<slot />

<style style lang="postcss">
  :root {
    @apply bg-gray-50;
  }
</style>
