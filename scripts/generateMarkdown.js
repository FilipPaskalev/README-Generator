// const MD = require('../utils/elements');
import markdownElements from '../utils/elements.js';

// Purpose: This file will generate the markdown for the README file
// function to generate markdown for README
export default function generateMarkdown(data) {
  return `
    ${markdownElements.h1.getResult(data.title)}
`;
}
