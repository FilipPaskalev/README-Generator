import DEFAULT_VALUES from './defaultValues.js';

const titleFilter = (title) => {
  return title === SHADOW_MESSAGES.title ? DEFAULT_VALUES.title : title;
};

const descriptionFilter = (description) => {
  return description === SHADOW_MESSAGES.description ? DEFAULT_VALUES.description : description;
};

const tocFilter = (toc) => {
  return toc === SHADOW_MESSAGES.toc ? DEFAULT_VALUES.toc : true;
};

const installationFilter = (installation) => {
  return installation === SHADOW_MESSAGES.installation ? DEFAULT_VALUES.installation : '';
};

const usageFilter = (usage) => {
  return usage === SHADOW_MESSAGES.usage ? '' : DEFAULT_VALUES.usage;
};

const projectCoverFilter = (projectCover) => {
  return projectCover === SHADOW_MESSAGES.projectCover ? DEFAULT_VALUES.projectCover : projectCover;
};

const deployedUrlFilter = (deployedUrl) => {
  return deployedUrl === SHADOW_MESSAGES.deployedUrl ? '' : deployedUrl;
};

const licenseFilter = (license) => {
  return license === SHADOW_MESSAGES.license ? DEFAULT_VALUES.license : license;
};

const gitHubUsernameFilter = (gitHubUsername) => {
  return gitHubUsername === SHADOW_MESSAGES.gitHubUsername ? '' : gitHubUsername;
};

const authorEmailFilter = (authorEmail) => {
  return authorEmail === SHADOW_MESSAGES.authorEmail ? '' : authorEmail;
};

const contributorsFilter = (contributors) => {
  return contributors === SHADOW_MESSAGES.contributors ? '' : contributors;
};

const testFilter = (test) => {
  return test === SHADOW_MESSAGES.test ? '' : test;
};

const questionsFilter = (questions) => {
  return questions === SHADOW_MESSAGES.questions ? '' : questions;
};

export default {
  titleFilter,
  descriptionFilter,
  tocFilter,
  installationFilter,
  usageFilter,
  projectCoverFilter,
  deployedUrlFilter,
  licenseFilter,
  gitHubUsernameFilter,
  authorEmailFilter,
  contributorsFilter,
  testFilter,
  questionsFilter,
};
