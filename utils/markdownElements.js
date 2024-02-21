// TODO add more elements form https://markdownguide.offshoot.io/extended-syntax/
const markdownElements = {
  h1: {
    getOpenTag: () => '#',
    getCloseTag: () => '',
    setText: (title) => title,
    getResultWithText: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h2: {
    getOpenTag: () => '##',
    getCloseTag: () => '',
    setText: (title) => title,
    getResultWithText: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h3: {
    getOpenTag: () => '###',
    getCloseTag: () => '',
    setText: (title) => title,
    getResultWithText: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h4: {
    getOpenTag: () => '####',
    getCloseTag: () => '',
    setText: (title) => title,
    getResultWithText: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h5: {
    getOpenTag: () => '#####',
    getCloseTag: () => '',
    setText: (title) => title,
    getResultWithText: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h6: {
    getOpenTag: () => '######',
    getCloseTag: () => '',
    setText: (title) => title,
    getResultWithText: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  highlight: {
    getOpenTagMD: () => '==',
    getCloseTagMD: () => '==',
    getOpenTagHTML: () => '<mark>',
    getCloseTagHTML: () => '</mark>',
    setText: (text) => text,
    getResultWithTextMD: function (text) {
      return `${this.getOpenTagMD()} ${this.setText(text)} ${this.getCloseTagMD()}`;
    },
    getResultWithTextHTML: function (text) {
      return `${this.getOpenTagHTML()} ${this.setText(text)} ${this.getCloseTagHTML()}`;
    },
  },
  italic: {
    getOpenTag: () => '*',
    getCloseTag: () => '*',
    setText: (text) => text,
    getResultWithText: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  bold: {
    getOpenTag: () => '**',
    getCloseTag: () => '**',
    setText: (text) => text,
    getResultWithText: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  boldAndItalic: {
    getOpenTag: () => '***',
    getCloseTag: () => '***',
    setText: (text) => text,
    getResultWithText: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  listItem: {
    getOpenTag: () => '- ',
    getCloseTag: () => '',
    setText: (text) => text,
    getResultWithText: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  nestedListItem: {
    getOpenTag: () => '   - ',
    getCloseTag: () => '',
    setText: (text) => text,
    getResultWithText: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  blockquote: {
    getOpenTag: () => '> ',
    getCloseTag: () => '',
    setText: (text) => text,
    getResultWithText: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  code: {
    getOpenTag: () => '```',
    getCloseTag: () => '```',
    setText: (code) => code,
    getResultWithText: function (code) {
      return `${this.getOpenTag()} ${this.setText(code)} ${this.getCloseTag()}`;
    },
  },
  link: {
    getOpenTag: () => '[',
    getCloseTag: (url) => `](${url})`,
    setText: (linkText, url) => [linkText, url],
    setUrl: (url) => url,
    setAltText: (altText) => altText,
    getResultWithText: function (linkText, url) {
      const urlWithTags = this.getCloseTag(this.setUrl(url));

      return `${this.getOpenTag()} ${this.setText(linkText, this.setUrl(url))} ${urlWithTags}`;
    },
  },
  image: {
    getOpenTag: () => '![',
    getCloseTag: (url) => `](${url})`,
    setText: (altText, url) => [altText, url],
    setUrl: (url) => url,
    setAltText: (altText) => altText,
    getResultWithText: function (altText, url) {
      const urlWithTags = this.getCloseTag(this.setUrl(url));

      return `${this.getOpenTag()}${this.setText(this.setAltText(altText), this.setUrl(url))}${urlWithTags}`;
    },
  },
  horizontalRule: {
    getOpenTag: () => '---',
    getCloseTag: () => '',
    setText: () => '',
    getResultWithText: function () {
      return `${this.getOpenTag()}${this.setText()}${this.getCloseTag()}`;
    },
  },
  text: {
    setText: (text) => text,
    getResultWithText: function (text) {
      return this.setText(text);
    },
  },
};

export default markdownElements;
