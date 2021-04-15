import unified from 'unified';
import parse from 'remark-parse';
import rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import hashtag, { DataWithTags } from './plugins/remark-hashtag';

export function render(markdown: string): [html: string, tags: string[]] {
  const processor = unified().use(parse).use(hashtag).use(rehype).use(stringify);
  const vFile = processor.processSync(markdown);
  return [vFile.contents as string, (vFile.data as DataWithTags).tags];
}
