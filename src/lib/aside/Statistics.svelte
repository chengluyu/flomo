<script lang="ts">
  import { numberOfMemos, numberOfTags } from '../../store/entries';
</script>

<section class="grid grid-cols-3">
  <div class="flex flex-col">
    <span class="value">{$numberOfMemos}</span><span class="unit">memo</span>
  </div>
  <div class="flex flex-col">
    <span class="value">{$numberOfTags}</span><span class="unit">tag</span>
  </div>
  <div class="flex flex-col">
    <span class="value">152</span><span class="unit">day</span>
  </div>
</section>

<style style lang="postcss">
  .value {
    @apply text-gray-400;
    @apply text-2xl font-semibold ordinal tabular-nums;
  }
  .unit {
    @apply text-gray-500;
    @apply text-xs uppercase;
  }
</style>
