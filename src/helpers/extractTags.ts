export type TipTapNode = {
  readonly type: string;
  readonly attrs?: Record<string, unknown>;
  readonly content?: TipTapNode[];
  readonly text?: string;
};

export function extractTags(root: TipTapNode): string[] {
  const tags = new Set<string>();
  visit(root);
  return Array.from(tags).sort();

  function visit(node: TipTapNode): void {
    if (node.type === 'mention') {
      const tag = node.attrs?.id;
      if (typeof tag === 'string') {
        tags.add(tag);
      }
    }
    if (Array.isArray(node.content)) {
      node.content.forEach(visit);
    }
  }
}
