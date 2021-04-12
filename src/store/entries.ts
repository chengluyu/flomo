import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';
import { render } from '../helpers/render';

export type Entry = {
  id: string;
  date: Date;
  tags: string[];
  content: string;
  html: string;
};

export const entries = writable<Entry[]>([fake(), fake(), fake(), fake()]);

export function create(content: string, tags: string[] = []): Entry {
  return {
    id: nanoid(),
    date: new Date(),
    tags,
    content,
    html: render(content)
  };
}

function fake(): Entry {
  const content =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum velit autem molestiae\
  dolorum odio officia. Distinctio et in debitis repellendus vel eos doloribus provident saepe\
  fuga hic reiciendis, ad id!';
  return create(content, ['welcome', 'tutorial', 'sample']);
}
