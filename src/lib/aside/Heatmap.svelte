<script lang="ts">
  import range from 'lodash/range.js';

  const TOTAL_WEEKS = 12;
  const DAYS_PER_WEEK = 7;
  const days = range(0, TOTAL_WEEKS * DAYS_PER_WEEK);
</script>

<section class="grid grid-rows-7 grid-cols-12 gap-1">
  {#each days as _}
    <div class="w-4 h-4 bg-gray-200 rounded-sm border border-transparent hover:border-green-400" />
  {/each}
</section>
