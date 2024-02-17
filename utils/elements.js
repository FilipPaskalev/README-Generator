const markdownElements = new Map([
  [
    'heading1',
    {
      element: { openTag: '# ', closeTag: '' },
      example: '# Heading 1',
    },
  ],
  [
    'heading2',
    {
      element: { openTag: '## ', closeTag: '' },
      example: '## Heading 2',
    },
  ],
  [
    'heading3',
    {
      element: { openTag: '### ', closeTag: '' },
      example: '### Heading 3',
    },
  ],
  [
    'heading4',
    {
      element: { openTag: '#### ', closeTag: '' },
      example: '#### Heading 4',
    },
  ],
  [
    'heading5',
    {
      element: { openTag: '##### ', closeTag: '' },
      example: '##### Heading 5',
    },
  ],
  [
    'heading6',
    {
      element: { openTag: '###### ', closeTag: '' },
      example: '###### Heading 6',
    },
  ],
  [
    'italic',
    {
      element: { openTag: '*', closeTag: '*' },
      example: '*Italic text*',
    },
  ],
  [
    'bold',
    {
      element: { openTag: '**', closeTag: '**' },
      example: '**Bold text**',
    },
  ],
  [
    'boldAndItalic',
    {
      element: { openTag: '***', closeTag: '***' },
      example: '***Bold and italic text***',
    },
  ],
  [
    'listItem1',
    {
      element: { openTag: '- ', closeTag: '' },
      example: '- List item 1',
    },
  ],
  [
    'listItem2',
    {
      element: { openTag: '- ', closeTag: '' },
      example: '- List item 2',
    },
  ],
  [
    'nestedListItem',
    {
      element: { openTag: '   - ', closeTag: '' },
      example: '   - Nested list item',
    },
  ],
  [
    'blockquote',
    {
      element: { openTag: '> ', closeTag: '' },
      example: '> Blockquote',
    },
  ],
  [
    'code',
    {
      element: { openTag: '```', closeTag: '```' },
      example: '```code```',
    },
  ],
  [
    'link',
    {
      element: { openTag: '[', closeTag: '](url)' },
      example: '[Link text](url)',
    },
  ],
  [
    'image',
    {
      element: { openTag: '![', closeTag: '](url)' },
      example: '![Alt text](url)',
    },
  ],
  [
    'horizontalRule',
    {
      element: { openTag: '---', closeTag: '' },
      example: '---',
    },
  ],
]);
