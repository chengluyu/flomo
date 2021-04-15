import type { Transformer, Plugin } from 'unified';
import type { Text } from 'mdast';
import visit from 'unist-util-visit';
import extract from 'mention-hashtag';

export type DataWithTags = { tags: string[] };

const hashtag: Plugin<[]> = function hashtag() {
  const transformer: Transformer = function transformer(tree, file) {
    const tags = [];
    visit<Text>(tree, ['text'], (text) => {
      tags.push(...extract(text.value, { symbol: false, type: '#' }));
    });
    (file.data as DataWithTags).tags = tags;
  };

  return transformer;
};

export default hashtag;
