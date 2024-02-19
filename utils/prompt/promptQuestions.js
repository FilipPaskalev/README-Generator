import LICENSES from '../licenses.js';
import PROMPT_MESSAGES from './promptMessages.js';
import SHADOW_MESSAGES from './shadowMessages.js';

const defaultValues = {
  title: `Title`,
  description: `Insert a concise overview of your project, including its purpose, goals, and key features. Describe the problem it aims to solve or the need it addresses. You can also include information about the target audience and potential benefits.`,
  toc: false,
  installation: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
  usage: 'Provide instructions and examples for use. Include screenshots as needed.',
  projectCover: './res/images/project-cover-1280x640.png',
  deployedUrl: '',
  license: 'unlicensed',
  dependencies: '',
  features: '',
  languagesAndTechnologies: '',
  gitHubUsername: '',
  authorEmail: '',
  contributors: '',
  test: '',
  questions: '',
};

const titleFilter = (title) => {
  return title === SHADOW_MESSAGES.title ? defaultValues.title : title;
};

const descriptionFilter = (description) => {
  return description === SHADOW_MESSAGES.description ? defaultValues.description : description;
};

const tocFilter = (toc) => {
  return toc === SHADOW_MESSAGES.toc ? defaultValues.toc : true;
};

const installationFilter = (installation) => {
  return installation === SHADOW_MESSAGES.installation ? defaultValues.installation : '';
};

const usageFilter = (usage) => {
  return usage === SHADOW_MESSAGES.usage ? '' : defaultValues.usage;
};

const projectCoverFilter = (projectCover) => {
  return projectCover === SHADOW_MESSAGES.projectCover ? defaultValues.projectCover : projectCover;
};

const deployedUrlFilter = (deployedUrl) => {
  return deployedUrl === SHADOW_MESSAGES.deployedUrl ? '' : deployedUrl;
};

const licenseFilter = (license) => {
  return license === SHADOW_MESSAGES.license ? defaultValues.license : license;
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

const validateGitHubUsername = (username) => {
  const usernameRegex = /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/;
  return usernameRegex.test(username) ? true : 'Please enter a valid GitHub username.';
};

const validateAuthorEmail = (authorEmail) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(authorEmail) ? true : 'Please enter a valid email address.';
};

const licenseChoiceList = () => Object.values(LICENSES).map((license) => license.abbreviation);

// array of questions for user
const promptQuestions = [
  {
    type: 'input',
    name: 'title',
    message: PROMPT_MESSAGES.title,
    default: SHADOW_MESSAGES.title,
    filter: titleFilter,
  },
  {
    type: 'input',
    name: 'description',
    message: PROMPT_MESSAGES.description,
    default: SHADOW_MESSAGES.description,
    filter: descriptionFilter,
  },
  {
    type: 'input',
    name: 'toc',
    message: PROMPT_MESSAGES.toc,
    default: SHADOW_MESSAGES.toc,
    filter: tocFilter,
  },
  {
    type: 'input',
    name: 'installation',
    message: PROMPT_MESSAGES.installation,
    default: SHADOW_MESSAGES.installation,
    filter: installationFilter,
  },
  {
    type: 'input',
    name: 'usage',
    message: PROMPT_MESSAGES.usage,
    default: SHADOW_MESSAGES.installation,
    filter: usageFilter,
  },
  {
    type: 'input',
    name: 'projectCover',
    message: PROMPT_MESSAGES.projectCover,
    default: SHADOW_MESSAGES.projectCover,
    filter: projectCoverFilter,
  },
  {
    type: 'input',
    name: 'deployedUrl',
    message: PROMPT_MESSAGES.deployedUrl,
    default: SHADOW_MESSAGES.deployedUrl,
    filter: deployedUrlFilter,
  },
  {
    type: 'list',
    name: 'license',
    message: PROMPT_MESSAGES.license,
    default: SHADOW_MESSAGES.license,
    choices: licenseChoiceList,
    filter: licenseFilter,
  },
  {
    type: 'input',
    name: 'dependencies',
    message: PROMPT_MESSAGES.dependencies,
    default: SHADOW_MESSAGES.dependencies,
  },
  {
    type: 'input',
    name: 'features',
    message: PROMPT_MESSAGES.features,
    default: SHADOW_MESSAGES.features,
  },
  {
    type: 'input',
    name: 'languagesAndTechnologies',
    message: PROMPT_MESSAGES.languagesAndTechnologies,
    defaultValues: SHADOW_MESSAGES.languagesAndTechnologies,
  },
  {
    type: 'input',
    name: 'gitHubUsername',
    message: PROMPT_MESSAGES.gitHubUsername,
    default: SHADOW_MESSAGES.gitHubUsername,
    validate: validateGitHubUsername,
    filter: gitHubUsernameFilter,
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: PROMPT_MESSAGES.authorEmail,
    default: SHADOW_MESSAGES.authorEmail,
    validate: validateAuthorEmail,
    filter: authorEmailFilter,
  },
  {
    type: 'input',
    name: 'contributors',
    message: PROMPT_MESSAGES.contributors,
    default: SHADOW_MESSAGES.contributors,
    filter: contributorsFilter,
  },
  {
    type: 'input',
    name: 'test',
    message: PROMPT_MESSAGES.test,
    default: SHADOW_MESSAGES.test,
    filter: testFilter,
  },
  {
    type: 'questions',
    name: 'questions',
    message: PROMPT_MESSAGES.questions,
    default: SHADOW_MESSAGES.questions,
    filter: questionsFilter,
  },
];

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.

export default promptQuestions;
