declare module 'mention-hashtag' {
  type BasicOptions = {
    unique?: boolean;
    symbol?: boolean;
  };
  type MentionOnlyOptions = BasicOptions & { type?: '@' };
  type HashTagOnlyOptions = BasicOptions & { type: '#' };
  type MentionAndHashTagOptions = BasicOptions & { type: 'all' };

  export type MentionAndHashTagResult = { mentions: string[]; hashtags: string[] };

  export default function extract(text: string, options: MentionOnlyOptions): string[];
  export default function extract(text: string, options: HashTagOnlyOptions): string[];
  export default function extract(
    text: string,
    options: MentionAndHashTagOptions
  ): MentionAndHashTagResult;
}
