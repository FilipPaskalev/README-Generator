import LICENSES from '../licenses.js';
import PROMPT_MESSAGES from './messages.js';
import SHADOW_MESSAGES from './shadowMessages.js';
import * as PROMPT_FILTERS from './filters.js';
import * as PROMPT_VALIDATORS from './validators.js';

const licenseChoiceList = () => Object.values(LICENSES).map((license) => license.abbreviation);

// array of questions for user
const promptQuestions = [
  {
    type: 'input',
    name: 'title',
    message: PROMPT_MESSAGES.title,
    default: SHADOW_MESSAGES.title,
    filter: PROMPT_FILTERS.titleFilter,
  },
  {
    type: 'input',
    name: 'description',
    message: PROMPT_MESSAGES.description,
    default: SHADOW_MESSAGES.description,
    filter: PROMPT_FILTERS.descriptionFilter,
  },
  {
    type: 'input',
    name: 'toc',
    message: PROMPT_MESSAGES.toc,
    default: SHADOW_MESSAGES.toc,
    filter: PROMPT_FILTERS.tocFilter,
  },
  {
    type: 'input',
    name: 'installation',
    message: PROMPT_MESSAGES.installation,
    default: SHADOW_MESSAGES.installation,
    filter: PROMPT_FILTERS.installationFilter,
  },
  {
    type: 'input',
    name: 'usage',
    message: PROMPT_MESSAGES.usage,
    default: SHADOW_MESSAGES.installation,
    filter: PROMPT_FILTERS.usageFilter,
  },
  {
    type: 'input',
    name: 'projectCover',
    message: PROMPT_MESSAGES.projectCover,
    default: SHADOW_MESSAGES.projectCover,
    filter: PROMPT_FILTERS.projectCoverFilter,
  },
  {
    type: 'input',
    name: 'deployedUrl',
    message: PROMPT_MESSAGES.deployedUrl,
    default: SHADOW_MESSAGES.deployedUrl,
    filter: PROMPT_FILTERS.deployedUrlFilter,
  },
  {
    type: 'list',
    name: 'license',
    message: PROMPT_MESSAGES.license,
    default: SHADOW_MESSAGES.license,
    choices: licenseChoiceList,
    filter: PROMPT_FILTERS.licenseFilter,
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
    default: SHADOW_MESSAGES.languagesAndTechnologies,
  },
  {
    type: 'input',
    name: 'gitHubUsername',
    message: PROMPT_MESSAGES.gitHubUsername,
    default: SHADOW_MESSAGES.gitHubUsername,
    validate: PROMPT_VALIDATORS.validateGitHubUsername,
    filter: PROMPT_FILTERS.gitHubUsernameFilter,
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: PROMPT_MESSAGES.authorEmail,
    default: SHADOW_MESSAGES.authorEmail,
    validate: PROMPT_VALIDATORS.validateAuthorEmail,
    filter: PROMPT_FILTERS.authorEmailFilter,
  },
  {
    type: 'input',
    name: 'contributors',
    message: PROMPT_MESSAGES.contributors,
    default: SHADOW_MESSAGES.contributors,
    filter: PROMPT_FILTERS.contributorsFilter,
  },
  {
    type: 'input',
    name: 'test',
    message: PROMPT_MESSAGES.test,
    default: SHADOW_MESSAGES.test,
    filter: PROMPT_FILTERS.testFilter,
  },
  {
    type: 'questions',
    name: 'questions',
    message: PROMPT_MESSAGES.questions,
    default: SHADOW_MESSAGES.questions,
    filter: PROMPT_FILTERS.questionsFilter,
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
