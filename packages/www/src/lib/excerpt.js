const INLINE_MARKDOWN = [
  [/\*\*(.+?)\*\*/g, '$1'],
  [/__(.+?)__/g, '$1'],
  [/\*(.+?)\*/g, '$1'],
  [/_(.+?)_/g, '$1'],
  [/`(.+?)`/g, '$1'],
  [/\[(.+?)\]\(.+?\)/g, '$1'],
];

// Fallback preview for articles that don't define one explicitly: the raw
// Markdown body's first paragraph, with inline formatting stripped down to
// plain text.
export function getExcerpt(body) {
  const firstParagraph = body.trim().split(/\n\s*\n/)[0]?.replace(/^#+\s*/, '') ?? '';
  const plain = INLINE_MARKDOWN.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    firstParagraph
  );
  return plain.replace(/\s+/g, ' ').trim();
}
