import MD from '../utils/elements.js';

function renderProjectTitle(title) {
  return MD.h1.getResult(title);
}

function renderBadges(badges) {}

function renderProjectCover(projectCover) {}

function renderTOC(toc) {
  return `${MD.h2.getResult('Table of Contents')}`;
}

function renderDescriptionSection(description) {
  return MD.text.getResult(description);
}

function renderInstallationSection(installation) {
  return `${MD.h2.getResult('Installation')}
  ${installation}`;
}

function renderUsageSection(usage) {
  return `${MD.h2.getResult('Usage')}
  ${usage}`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `${renderProjectTitle(data.title)}
${renderDescriptionSection(data.description)}
${renderTOC(data.toc)}
${renderInstallationSection(data.installation)}
${renderUsageSection(data.usage)}
`;
}

export default generateMarkdown;
