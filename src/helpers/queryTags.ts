import { tags } from '../store/entries';
import Fuse from 'fuse.js';

let cachedTags: string[] = [];
let tagsFinder = new Fuse(cachedTags);

tags.subscribe(($tags) => {
  cachedTags = $tags;
  tagsFinder.setCollection($tags);
});

export function queryTags(query: string): string[] {
  return query.length === 0
    ? cachedTags.slice(0, 10)
    : tagsFinder
        .search(query)
        .map((t) => t.item)
        .concat(query);
}
