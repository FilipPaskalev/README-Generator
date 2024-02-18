import consoleInputHelpers from './utils.js';
import LICENSES from './licenses.js';

const defaultValues = {
  title: `Title`,
  description: `Insert a concise overview of your project, including its purpose, goals, and key features. Describe the problem it aims to solve or the need it addresses. You can also include information about the target audience and potential benefits.`,
  toc: false,
  installation: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
  usage: 'Provide instructions and examples for use. Include screenshots as needed.',
  projectCover: './res/images/project-cover-1280x640.png',
  deployedUrl: '',
};

const questionsInfo = {
  title: `The title of your project is the first thing people see when they access your README. It should capture the main goal, scope, and value of your project in a few words. Avoid vague or generic terms, and use keywords that relate to your client's needs and expectations. ${consoleInputHelpers.ifYouNotSure} default title will be "${defaultValues.title}". ${consoleInputHelpers.pressEnter}`,
  description: `${consoleInputHelpers.pleaseEnter} purpose and functionality of this project in 2-3 sentences. ${consoleInputHelpers.ifYouNotSure}. Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  - What was your motivation?
  - Why did you build this project? Note: the answer is not "Because it was a homework assignment."
  - What problem does it solve?
  - What did you learn?
  ${consoleInputHelpers.pressEnter}`,
  toc: `If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ... and so on
  ${consoleInputHelpers.ifYouNotSure}. Default value will be NO. ${consoleInputHelpers.pressEnter}`,
  installation: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ${consoleInputHelpers.ifYouNotSure}. Default value will be YES. ${consoleInputHelpers.pressEnter}`,
  usage: `Provide instructions and examples for use. Include screenshots as needed. ${consoleInputHelpers.ifYouNotSure}. Default value will be YES. ${consoleInputHelpers.pressEnter}`,
  projectCover: `${consoleInputHelpers.pleaseEnter} relative filepath to the project cover image, ${consoleInputHelpers.ifApplicable}. Default path is './res/images/project-cover-1280x640.png'. 
  Hint:
  To add a screenshot, use "res/images" folder in repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  ![alt text](res/images/screenshot.png)
  ${consoleInputHelpers.pressEnter}`,
  deployedUrl: `${consoleInputHelpers.pleaseEnter} URL where a user can access your deployed application. ${consoleInputHelpers.ifYouDoNotHaveAny}. ${consoleInputHelpers.pressEnter}`,
};

// array of questions for user
const promptQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title:',
    default: questionsInfo.title,
    filter: (title) => {
      return title === questionsInfo.title ? defaultValues.title : title;
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description:',
    default: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
      - What was your motivation?
      - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
      - What problem does it solve?
      - What did you learn?`,
    default: questionsInfo.description,
    filter: (description) => {
      return description === questionsInfo.description ? defaultValues.description : description;
    },
  },
  {
    type: 'input',
    name: 'toc',
    message: `TOC:`,
    default: questionsInfo.toc,
    filter: (toc) => {
      return toc === questionsInfo.toc ? defaultValues.toc : true;
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: `Installation section:`,
    default: questionsInfo.installation,
    filter: (installation) => {
      return installation === questionsInfo.installation ? defaultValues.installation : '';
    },
  },
  {
    type: 'input',
    name: 'usage',
    message: `Usage section:`,
    default: questionsInfo.installation,
    filter: (usage) => {
      return usage === questionsInfo.usage ? '' : defaultValues.usage;
    },
  },
  {
    type: 'input',
    name: 'projectCover',
    message: `Project cover:`,
    default: questionsInfo.projectCover,
    filter: (projectCover) => {
      return projectCover === questionsInfo.projectCover
        ? defaultValues.projectCover
        : projectCover;
    },
  },
  {
    type: 'input',
    name: 'deployedUrl',
    message: `Deployed URL:`,
    default: questionsInfo.deployedUrl,
    filter: (deployedUrl) => {
      return deployedUrl === questionsInfo.deployedUrl ? '' : deployedUrl;
    },
  },
  {
    type: 'checkbox',
    name: 'license',
    message: `Please select a license applicable to this project (${consoleInputHelpers.ifYouNotSure}):`,
    choices: Object.keys(LICENSES).map((key) => LICENSES[key].abbreviation),
  },
  // {
  //   type: 'input',
  //   name: 'dependencies',
  //   message: `List any project dependencies here (${consoleInputHelpers.ifYouDoNotHaveAny}):`,
  // },
  // {
  //   type: 'input',
  //   name: 'features',
  //   message: 'List some cool features about this project here (if any):',
  // },
  // {
  //   type: 'input',
  //   name: 'languagesAndTechnologies',
  //   message: `${consoleInputHelpers.pleaseEnter} languages or technologies associated with this project:`,
  // },
  // {
  //   type: 'input',
  //   name: 'authorName',
  //   message: 'Write your GitHub username here:',
  // },
  // {
  //   type: 'input',
  //   name: 'authorEmail',
  //   message: 'Provide a valid email address for users to reach you for questions:',
  //   default: () => {},
  //   validate: function (authorEmail) {
  //     valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(authorEmail);

  //     if (valid) {
  //       console.log('Thank you for providing a valid email address.');
  //       return true;
  //     } else {
  //       console.log('Please enter a valid email address.');
  //       return false;
  //     }
  //   },
  // },
  // {
  //   type: 'input',
  //   name: 'contributors',
  //   message: `Please list any contributors. (Use GitHub usernames) (${consoleInputHelpers.ifYouDoNotHaveAny}):`,
  //   default: '',
  // },
  // {
  //   type: 'input',
  //   name: 'test',
  //   message: 'Provide walkthrough of required tests (if applicable):',
  // },
  // {
  //   type: 'questions',
  //   name: 'questions',
  //   message: `${consoleInputHelpers.pleaseEnter} description of how to reach you for questions ${consoleInputHelpers.ifYouNotSure}:`,
  // },
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
