import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

export type Entry = {
  id: string;
  date: Date;
  tags: string[];
  content: string;
};

export const entries = writable<Entry[]>([fake(), fake(), fake(), fake()]);

function fake(): Entry {
  return {
    id: nanoid(),
    date: new Date(),
    tags: ['sample', 'welcome'],
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit autem molestiae\
    dolorum odio officia. Distinctio et in debitis repellendus vel eos doloribus provident saepe\
    fuga hic reiciendis, ad id!'
  };
}
