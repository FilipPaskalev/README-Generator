import MD from '../utils/markdownElements.js';

const renderProjectTitle = (title) => MD.h1.getResultWithText(title);

const renderDescriptionTitle = (description) => MD.h2.getResultWithText(description);

// TODO add TOC to generateMarkdown
// const renderTableOfContents = (toc) => MD.h3.getResultWithText(toc);

const renderInstallation = (installation) => MD.h3.getResultWithText(installation);

const renderUsage = (usage) => MD.h3.getResultWithText(usage);

// TODO add license to generateMarkdown
// const renderLicense = (license) => return MD.h3.getResultWithText(license);

const renderContributing = (contributing) => MD.h3.getResultWithText(contributing);

const renderTests = (tests) => MD.h3.getResultWithText(tests);

const renderQuestions = (questions) => MD.h3.getResultWithText(questions);

// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderProjectTitle(data.title)}

${renderDescriptionTitle(data.description)}

${renderInstallation(data.installation)}

${renderUsage(data.usage)}

${renderContributing(data.contributing)}

${renderTests(data.tests)}

${renderQuestions(data.questions)}
`;
}

export default generateMarkdown;
