<script lang="ts">
  import HashTag from '$lib/icons/HashTag.svelte';
  import Bold from './icons/Bold.svelte';
  import BulletList from './icons/BulletList.svelte';
  import Image from './icons/Image.svelte';
  import OrderedList from './icons/OrderedList.svelte';
  import Underline from './icons/Underline.svelte';
  import { entries, create as createEntry } from '../../store/entries';
  import { nanoid } from 'nanoid/non-secure';

  let textContent = '';

  function create(): void {
    entries.update((entries) => [createEntry(textContent), ...entries]);
    textContent = '';
  }
</script>

<section class="p-4 rounded-md border-2 border-gray-400 bg-white">
  <textarea
    class="block w-full resize-none focus:outline-none"
    name="editor"
    id="editor"
    rows="3"
    bind:value={textContent}
  />
  <div class="toolbar mt-2 w-full flex flex-row items-center">
    <button><HashTag /></button>
    <button><BulletList /></button>
    <button><OrderedList /></button>
    <button><Bold /></button>
    <button><Underline /></button>
    <button><Image /></button>
    <button class="send-button" disabled={textContent.length === 0} on:click={create}>发送</button>
  </div>
</section>

<style style lang="postcss">
  .toolbar > button:not(:last-child) {
    @apply mr-4 text-gray-600;
    @apply focus:outline-none focus:text-gray-900;
  }

  .send-button {
    @apply ml-auto px-4 py-1 bg-green-500 text-white rounded;
    @apply transition-opacity duration-300 ease-in-out;
    @apply disabled:opacity-50;
  }
</style>
