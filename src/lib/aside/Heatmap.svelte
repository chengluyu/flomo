<script lang="ts">
  import HeatmapCell from './_HeatmapCell.svelte';

  const TOTAL_WEEKS = 12;
  const DAYS_PER_WEEK = 7;
  const dates = makeDates();

  function makeDates(): Date[] {
    const dates = [new Date()];
    const n = TOTAL_WEEKS * DAYS_PER_WEEK;
    for (let i = 1; i < n; i++) {
      const date = new Date(dates[0]);
      date.setDate(date.getDate() - 1);
      dates.unshift(date);
    }
    return dates;
  }
</script>

<section class="max-w-full grid grid-flow-col grid-rows-heatmap grid-cols-heatmap gap-1">
  {#each dates as date}
    <HeatmapCell date={date} />
  {/each}
</section>
