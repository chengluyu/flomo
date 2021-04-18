<script>
  import Editor from '$lib/main/Editor.svelte';
  import Card from '$lib/main/Card.svelte';
  import { entries } from '../../store/entries';
</script>

<Editor />
{#each $entries as entry}
  <Card {entry} />
{/each}
