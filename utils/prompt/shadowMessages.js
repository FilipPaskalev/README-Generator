import HELPERS from './helpers.js';

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

export default shadowMessages;
