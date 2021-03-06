import { writable, derived } from 'svelte/store';
import { nanoid } from 'nanoid/non-secure';

export type Entry = {
  id: string;
  date: Date;
  tags: string[];
  html: string;
};

export const entries = writable<Entry[]>([fake(), fake(), fake(), fake()]);

export const tags = derived(entries, ($entries): string[] => {
  const tags = new Set<string>();
  for (const entry of $entries) {
    for (const tag of entry.tags) {
      tags.add(tag);
    }
  }
  return [...tags.values()];
});

export const numberOfMemos = derived(entries, ($entries) => $entries.length);

export const numberOfTags = derived(tags, ($tags) => $tags.length);

export function create(html: string, tags: string[]): Entry {
  return { id: nanoid(), date: new Date(), tags, html };
}

function fake(): Entry {
  const content =
    '#welcome\n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit autem molestiae\
  dolorum odio officia. Distinctio et in debitis repellendus vel eos doloribus provident saepe\
  fuga hic reiciendis, ad id!';
  return create(content, ['welcome']);
}
