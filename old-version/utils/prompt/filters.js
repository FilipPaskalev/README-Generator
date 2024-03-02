import DEFAULT_VALUES from './defVal.js';
import SHADOW_MESSAGES from './shadowMessages.js';

const filterTitle = (title) =>
  title === SHADOW_MESSAGES.title ? DEFAULT_VALUES.title.header : title;

const filterDescription = (description) =>
  description === SHADOW_MESSAGES.description ? DEFAULT_VALUES.description.header : description;

const filterInstallation = (installation) =>
  installation === SHADOW_MESSAGES.installation ? DEFAULT_VALUES.installation.header : installation;

const filterUsage = (usage) =>
  usage === SHADOW_MESSAGES.usage ? DEFAULT_VALUES.usage.header : usage;

// TODO finish TOC filter

// const filterTOC = (toc) => {
//   return toc === SHADOW_MESSAGES.toc ? DEFAULT_VALUES.toc.header : toc;
// };

// const filterLicense = (license) => {
//   return license === SHADOW_MESSAGES.license ? DEFAULT_VALUES.license.header : license;
// };

const filterContributing = (contributing) =>
  contributing === SHADOW_MESSAGES.contributing ? DEFAULT_VALUES.contributing.header : contributing;

const filterTests = (tests) =>
  tests === SHADOW_MESSAGES.tests ? DEFAULT_VALUES.tests.header : tests;

const filterQuestions = (questions) =>
  questions === SHADOW_MESSAGES.questions ? DEFAULT_VALUES.questions.header : questions;

export default {
  filterTitle,
  filterDescription,
  // filterTOC,
  filterInstallation,
  filterUsage,
  // filterLicense,
  filterContributing,
  filterTests,
  filterQuestions,
};
