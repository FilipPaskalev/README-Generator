const markdownElements = {
  h1: {
    getOpenTag: () => '# ',
    getCloseTag: () => '',
    setText: (title) => title,
    getResult: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h2: {
    getOpenTag: () => '## ',
    getCloseTag: () => '',
    setText: (title) => title,
    getResult: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h3: {
    getOpenTag: () => '### ',
    getCloseTag: () => '',
    setText: (title) => title,
    getResult: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h4: {
    getOpenTag: () => '#### ',
    getCloseTag: () => '',
    setText: (title) => title,
    getResult: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h5: {
    getOpenTag: () => '##### ',
    getCloseTag: () => '',
    setText: (title) => title,
    getResult: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  h6: {
    getOpenTag: () => '###### ',
    getCloseTag: () => '',
    setText: (title) => title,
    getResult: function (title) {
      return `${this.getOpenTag()} ${this.setText(title)} ${this.getCloseTag()}`;
    },
  },
  italic: {
    getOpenTag: () => '*',
    getCloseTag: () => '*',
    setText: (text) => text,
    getResult: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  bold: {
    getOpenTag: () => '**',
    getCloseTag: () => '**',
    setText: (text) => text,
    getResult: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  boldAndItalic: {
    getOpenTag: () => '***',
    getCloseTag: () => '***',
    setText: (text) => text,
    getResult: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  listItem: {
    getOpenTag: () => '- ',
    getCloseTag: () => '',
    setText: (text) => text,
    getResult: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  nestedListItem: {
    getOpenTag: () => '   - ',
    getCloseTag: () => '',
    setText: (text) => text,
    getResult: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  blockquote: {
    getOpenTag: () => '> ',
    getCloseTag: () => '',
    setText: (text) => text,
    getResult: function (text) {
      return `${this.getOpenTag()} ${this.setText(text)} ${this.getCloseTag()}`;
    },
  },
  code: {
    getOpenTag: () => '```',
    getCloseTag: () => '```',
    setText: (code) => code,
    getResult: function (code) {
      return `${this.getOpenTag()} ${this.setText(code)} ${this.getCloseTag()}`;
    },
  },
  link: {
    getOpenTag: () => '[',
    getCloseTag: (url) => `](${url})`,
    setText: (linkText, url) => [linkText, url],
    setUrl: (url) => url,
    setAltText: (altText) => altText,
    getResult: function (linkText, url) {
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
    getResult: function (altText, url) {
      const urlWithTags = this.getCloseTag(this.setUrl(url));

      return `${this.getOpenTag()}${this.setText(this.setAltText(altText), this.setUrl(url))}${urlWithTags}`;
    },
  },
  horizontalRule: {
    getOpenTag: () => '---',
    getCloseTag: () => '',
    setText: () => '',
    getResult: function () {
      return `${this.getOpenTag()}${this.setText()}${this.getCloseTag()}`;
    },
  },
};

export default markdownElements;
