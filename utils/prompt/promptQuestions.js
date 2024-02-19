import HELPERS from '../utils.js';
import LICENSES from '../licenses.js';
import PROMPT_MESSAGES from './promptMessages.js';

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

const shadowMessages = {
  title: `The title of your project is the first thing people see when they access your README. It should capture the main goal, scope, and value of your project in a few words. Avoid vague or generic terms, and use keywords that relate to your client's needs and expectations. ${HELPERS.ifYouNotSure} default title will be "${defaultValues.title}". ${HELPERS.pressEnter}`,
  description: `${HELPERS.pleaseEnter} purpose and functionality of this project in 2-3 sentences. ${HELPERS.ifYouNotSure}. Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  - What was your motivation?
  - Why did you build this project? Note: the answer is not "Because it was a homework assignment."
  - What problem does it solve?
  - What did you learn?
  ${HELPERS.pressEnter}`,
  toc: `If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ... and so on
  ${HELPERS.ifYouNotSure}. Default value will be NO. ${HELPERS.pressEnter}`,
  installation: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ${HELPERS.ifYouNotSure}. Default value will be YES. ${HELPERS.pressEnter}`,
  usage: `Provide instructions and examples for use. Include screenshots as needed. ${HELPERS.ifYouNotSure}. Default value will be YES. ${HELPERS.pressEnter}`,
  projectCover: `${HELPERS.pleaseEnter} relative filepath to the project cover image, ${HELPERS.ifApplicable}. Default path is './res/images/project-cover-1280x640.png'. 
  Hint:
  To add a screenshot, use "res/images" folder in repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  ![alt text](res/images/screenshot.png)
  ${HELPERS.pressEnter}`,
  deployedUrl: `${HELPERS.pleaseEnter} URL where a user can access your deployed application. ${HELPERS.ifYouDoNotHaveAny}. ${HELPERS.pressEnter}`,
  license: `Please select a license applicable to this project. ${HELPERS.ifYouNotSure}. ${HELPERS.pressEnter}`,
  dependencies: `List any project dependencies here ${HELPERS.ifYouDoNotHaveAny}. ${HELPERS.pressEnter}`,
  features: `List some cool features about this project here ${HELPERS.ifApplicable}. ${HELPERS.ifYouNotSure}. ${HELPERS.pressEnter}`,
  languagesAndTechnologies: `${HELPERS.pleaseEnter} languages or technologies associated with this project. ${HELPERS.ifYouNotSure}. ${HELPERS.pressEnter}`,
  gitHubUsername: 'Write your GitHub username here:',
  authorEmail: 'Provide a valid email address for users to reach you for questions:',
  contributors: `Please list any contributors. (Use GitHub usernames) ${HELPERS.ifYouDoNotHaveAny}`,
  test: `Provide walkthrough of required tests ${HELPERS.ifApplicable}`,
  questions: `${HELPERS.pleaseEnter} description of how to reach you for questions ${HELPERS.ifYouNotSure}`,
};

const titleFilter = (title) => {
  return title === shadowMessages.title ? defaultValues.title : title;
};

const descriptionFilter = (description) => {
  return description === shadowMessages.description ? defaultValues.description : description;
};

const tocFilter = (toc) => {
  return toc === shadowMessages.toc ? defaultValues.toc : true;
};

const installationFilter = (installation) => {
  return installation === shadowMessages.installation ? defaultValues.installation : '';
};

const usageFilter = (usage) => {
  return usage === shadowMessages.usage ? '' : defaultValues.usage;
};

const projectCoverFilter = (projectCover) => {
  return projectCover === shadowMessages.projectCover ? defaultValues.projectCover : projectCover;
};

const deployedUrlFilter = (deployedUrl) => {
  return deployedUrl === shadowMessages.deployedUrl ? '' : deployedUrl;
};

const licenseFilter = (license) => {
  return license === shadowMessages.license ? defaultValues.license : license;
};

const gitHubUsernameFilter = (gitHubUsername) => {
  return gitHubUsername === shadowMessages.gitHubUsername ? '' : gitHubUsername;
};

const authorEmailFilter = (authorEmail) => {
  return authorEmail === shadowMessages.authorEmail ? '' : authorEmail;
};

const contributorsFilter = (contributors) => {
  return contributors === shadowMessages.contributors ? '' : contributors;
};

const testFilter = (test) => {
  return test === shadowMessages.test ? '' : test;
};

const questionsFilter = (questions) => {
  return questions === shadowMessages.questions ? '' : questions;
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
    default: shadowMessages.title,
    filter: titleFilter,
  },
  {
    type: 'input',
    name: 'description',
    message: PROMPT_MESSAGES.description,
    default: shadowMessages.description,
    filter: descriptionFilter,
  },
  {
    type: 'input',
    name: 'toc',
    message: PROMPT_MESSAGES.toc,
    default: shadowMessages.toc,
    filter: tocFilter,
  },
  {
    type: 'input',
    name: 'installation',
    message: PROMPT_MESSAGES.installation,
    default: shadowMessages.installation,
    filter: installationFilter,
  },
  {
    type: 'input',
    name: 'usage',
    message: PROMPT_MESSAGES.usage,
    default: shadowMessages.installation,
    filter: usageFilter,
  },
  {
    type: 'input',
    name: 'projectCover',
    message: PROMPT_MESSAGES.projectCover,
    default: shadowMessages.projectCover,
    filter: projectCoverFilter,
  },
  {
    type: 'input',
    name: 'deployedUrl',
    message: PROMPT_MESSAGES.deployedUrl,
    default: shadowMessages.deployedUrl,
    filter: deployedUrlFilter,
  },
  {
    type: 'list',
    name: 'license',
    message: PROMPT_MESSAGES.license,
    default: shadowMessages.license,
    choices: licenseChoiceList,
    filter: licenseFilter,
  },
  {
    type: 'input',
    name: 'dependencies',
    message: PROMPT_MESSAGES.dependencies,
    default: shadowMessages.dependencies,
  },
  {
    type: 'input',
    name: 'features',
    message: PROMPT_MESSAGES.features,
    default: shadowMessages.features,
  },
  {
    type: 'input',
    name: 'languagesAndTechnologies',
    message: PROMPT_MESSAGES.languagesAndTechnologies,
    defaultValues: shadowMessages.languagesAndTechnologies,
  },
  {
    type: 'input',
    name: 'gitHubUsername',
    message: PROMPT_MESSAGES.gitHubUsername,
    default: shadowMessages.gitHubUsername,
    validate: validateGitHubUsername,
    filter: gitHubUsernameFilter,
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: PROMPT_MESSAGES.authorEmail,
    default: shadowMessages.authorEmail,
    validate: validateAuthorEmail,
    filter: authorEmailFilter,
  },
  {
    type: 'input',
    name: 'contributors',
    message: PROMPT_MESSAGES.contributors,
    default: shadowMessages.contributors,
    filter: contributorsFilter,
  },
  {
    type: 'input',
    name: 'test',
    message: PROMPT_MESSAGES.test,
    default: shadowMessages.test,
    filter: testFilter,
  },
  {
    type: 'questions',
    name: 'questions',
    message: PROMPT_MESSAGES.questions,
    default: shadowMessages.questions,
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
