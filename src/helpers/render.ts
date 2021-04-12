import unified from 'unified';
import parse from 'remark-parse';
import rehype from 'remark-rehype';
import stringify from 'rehype-stringify';

export function render(markdown: string): string {
  const processor = unified().use(parse).use(rehype).use(stringify);
  return processor.processSync(markdown).contents as string;
}
