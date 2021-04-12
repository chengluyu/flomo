export function extractTags(text: string): string[] {
  const tags = [];
  const pattern = /#(\w+)\s/gm;
  let execResult: RegExpExecArray | null;
  while ((execResult = pattern.exec(text)) !== null) {
    tags.push(execResult[1]);
  }
  return tags;
}
