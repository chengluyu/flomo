<svelte:options accessors />

<script lang="ts">
  export let selectedIndex: number;
  export let items: string[];
  export let command: Function;

  function selectItem(index: number): void {
    const item = items[index];
    if (item) {
      command({ id: item });
    }
  }
</script>

<div class="items">
  {#if items.length === 0}
    <div class="item">暂无标签</div>
  {/if}
  {#each items as item, index (index)}
    <button
      class="item"
      class:is-selected={index === selectedIndex}
      on:click={() => selectItem(index)}
    >
      {item}
    </button>
  {/each}
</div>

<style lang="scss" scoped>
  .items {
    position: relative;
    border-radius: 0.25rem;
    background: white;
    color: rgba(black, 0.8);
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .item {
    display: block;
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 0.2rem 0.5rem;

    &.is-selected,
    &:hover {
      color: #a975ff;
      background: rgba(#a975ff, 0.1);
    }
  }
</style>
