<script lang="ts">
  import { Editor } from '@tiptap/core';
  import { defaultExtensions } from '@tiptap/starter-kit';
  import { onDestroy,onMount } from 'svelte';
  import type { TipTapNode } from '../helpers/extractTags';
  import { extractTags } from '../helpers/extractTags';
  import { createHashTagExtension } from '../helpers/hashTag';
  import { create as createEntry,entries } from '../store/entries';
  import Bold from './icons/Bold.svelte';
  import BulletList from './icons/BulletList.svelte';
  import HashTag from './icons/HashTag.svelte';
  import Image from './icons/Image.svelte';
  import OrderedList from './icons/OrderedList.svelte';
  import Underline from './icons/Underline.svelte';


  let element: HTMLDivElement;
  let editor: Editor;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [...defaultExtensions(), createHashTagExtension()],
      content: '<p>Hello World! 🌍️ </p>',
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      }
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  function create(): void {
    const documentTree = editor.getJSON();
    entries.update(($entries) => [
      createEntry(editor.getHTML(), extractTags(documentTree as TipTapNode)),
      ...$entries
    ]);
    editor.chain().clearContent().run();
  }

  function heading(level: 1 | 2 | 3 | 4 | 5 | 6): void {
    editor.chain().focus().toggleHeading({ level }).run();
  }
</script>

<section class="p-4 rounded-md border-2 border-gray-200 bg-white">
  <div class="prose block w-full resize-none focus:outline-none" bind:this={element} />
  {#if editor}
    <div class="toolbar mt-2 w-full flex flex-row items-center">
      <button
        on:click={heading.bind(null, 1)}
        class:active={editor.isActive('heading', { level: 1 })}
      >
        H1
      </button>
      <button
        on:click={heading.bind(null, 2)}
        class:active={editor.isActive('heading', { level: 2 })}
      >
        H2
      </button>
      <button
        on:click={() => editor.chain().focus().setParagraph().run()}
        class:active={editor.isActive('paragraph')}
      >
        P
      </button>
      <button on:click={() => editor.chain().focus().insertContent('#').run()}><HashTag /></button>
      <button
        on:click={() => editor.chain().focus().toggleBulletList().run()}
        class:active={editor.isActive('bulletList')}
      >
        <BulletList />
      </button>
      <button
        on:click={() => editor.chain().focus().toggleOrderedList().run()}
        class:active={editor.isActive('orderedList')}
      >
        <OrderedList />
      </button>
      <button
        on:click={() => editor.chain().focus().toggleBold().run()}
        class:active={editor.isActive('bold')}
      >
        <Bold />
      </button>
      <button
        on:click={() => editor.chain().focus().toggleItalic().run()}
        class:active={editor.isActive('italic')}
      >
        <Underline />
      </button>
      <button>
        <Image />
      </button>
      <button class="send-button" on:click={create}>发送</button>
    </div>
  {/if}
</section>

<style style lang="postcss">
  .toolbar > button:not(:last-child) {
    @apply w-8 h-8;
    @apply flex items-center justify-center;
    @apply mr-1 text-gray-600;
    @apply rounded-md;
    @apply focus:outline-none focus:text-gray-900;
  }
  .toolbar > button.active {
    @apply bg-gray-200;
  }
  .send-button {
    @apply ml-auto px-4 py-1 bg-green-500 text-white rounded;
    @apply transition-opacity duration-300 ease-in-out;
    @apply disabled:opacity-50;
  }
</style>
