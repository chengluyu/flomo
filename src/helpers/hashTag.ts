import Mention from '@tiptap/extension-mention';
import type { MentionOptions } from '@tiptap/extension-mention';
import type { Node } from '@tiptap/core';
import { queryTags } from './queryTags';
import MentionList from '../lib/MentionList.svelte';
import tippy from 'tippy.js';
import type { Instance as TippyInstance } from 'tippy.js';

export function createHashTagExtension(): Node<MentionOptions> {
  return Mention.configure({
    HTMLAttributes: { class: 'mention' },
    suggestion: {
      char: '#',
      items: queryTags,
      render: renderMentionSuggestions,
    }
  });
}

type MentionSuggestionsRenderer = ReturnType<MentionOptions['suggestion']['render']>;

function renderMentionSuggestions(): MentionSuggestionsRenderer {
  const element = document.createElement('div');
  let component: MentionList;
  let popup: TippyInstance[];
  return {
    onStart: (props) => {
      component = new MentionList({
        target: element,
        props: {
          selectedIndex: 0,
          items: props.items,
          command: props.command
        }
      });
      popup = tippy('body', {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: element,
        showOnCreate: true,
        interactive: true,
        trigger: 'manual',
        placement: 'bottom-start'
      });
    },
    onUpdate(props) {
      component.$set({
        items: props.items,
        command: props.command
      });
      popup[0].setProps({
        getReferenceClientRect: props.clientRect
      });
    },
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        component.$set({
          selectedIndex:
            (component.selectedIndex + component.items.length - 1) % component.items.length
        });
        return true;
      }
      if (event.key === 'ArrowDown') {
        console.log(component);
        component.$set({
          selectedIndex: (component.selectedIndex + 1) % component.items.length
        });
        return true;
      }
      if (event.key === 'Enter') {
        const item = component.items[component.selectedIndex];
        component.command({ id: item });
        return true;
      }
      return false;
    },
    onExit() {
      popup[0].destroy();
      component.$destroy();
    }
  };
}
