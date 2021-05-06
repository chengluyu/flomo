<script>
  import Editor from '$lib/Editor.svelte';
  import Card from '$lib/main/Card.svelte';
  import { entries } from '../../store/entries';
</script>

<Editor />
{#each $entries as entry (entry.id)}
  <Card {entry} />
{/each}
