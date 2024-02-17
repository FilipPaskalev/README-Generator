const consoleInputHelpers = {
  pleaseEnter: 'Please enter',
  ifYouDoNotHaveAny: "If you don't have any, just press enter",
  ifYouNotSure: 'If you are not sure, you can add it later in the README.md file',
}

const licenses = [
  { name: 'Academic Free License v3.0', abbreviation: 'AFL-3.0' },
  { name: 'Apache license 2.0', abbreviation: 'Apache-2.0' },
  { name: 'Artistic license 2.0', abbreviation: 'Artistic-2.0' },
  { name: 'Boost Software License 1.0', abbreviation: 'BSL-1.0' },
  { name: "BSD 2-clause 'Simplified' license", abbreviation: 'BSD-2-Clause' },
  { name: "BSD 3-clause 'New' or 'Revised' license", abbreviation: 'BSD-3-Clause' },
  { name: 'BSD 3-clause Clear license', abbreviation: 'BSD-3-Clause-Clear' },
  { name: "BSD 4-clause 'Original' or 'Old' license", abbreviation: 'BSD-4-Clause' },
  { name: 'BSD Zero-Clause license', abbreviation: '0BSD' },
  { name: 'Creative Commons license family', abbreviation: 'CC' },
  { name: 'Creative Commons Zero v1.0 Universal', abbreviation: 'CC0-1.0' },
  { name: 'Creative Commons Attribution 4.0', abbreviation: 'CC-BY-4.0' },
  { name: 'Creative Commons Attribution ShareAlike 4.0', abbreviation: 'CC-BY-SA-4.0' },
  { name: 'Do What The F*ck You Want To Public License', abbreviation: 'WTFPL' },
  { name: 'Educational Community License v2.0', abbreviation: 'ECL-2.0' },
  { name: 'Eclipse Public License 1.0', abbreviation: 'EPL-1.0' },
  { name: 'Eclipse Public License 2.0', abbreviation: 'EPL-2.0' },
  { name: 'European Union Public License 1.1', abbreviation: 'EUPL-1.1' },
  { name: 'GNU Affero General Public License v3.0', abbreviation: 'AGPL-3.0' },
  { name: 'GNU General Public License family', abbreviation: 'GPL' },
  { name: 'GNU General Public License v2.0', abbreviation: 'GPL-2.0' },
  { name: 'GNU General Public License v3.0', abbreviation: 'GPL-3.0' },
  { name: 'GNU Lesser General Public License family', abbreviation: 'LGPL' },
  { name: 'GNU Lesser General Public License v2.1', abbreviation: 'LGPL-2.1' },
  { name: 'GNU Lesser General Public License v3.0', abbreviation: 'LGPL-3.0' },
  { name: 'ISC', abbreviation: 'ISC' },
  { name: 'LaTeX Project Public License v1.3c', abbreviation: 'LPPL-1.3c' },
  { name: 'Microsoft Public License', abbreviation: 'MS-PL' },
  { name: 'MIT', abbreviation: 'MIT' },
  { name: 'Mozilla Public License 2.0', abbreviation: 'MPL-2.0' },
  { name: 'Open Software License 3.0', abbreviation: 'OSL-3.0' },
  { name: 'PostgreSQL License', abbreviation: 'PostgreSQL' },
  { name: 'SIL Open Font License 1.1', abbreviation: 'OFL-1.1' },
  { name: 'University of Illinois/NCSA Open Source License', abbreviation: 'NCSA' },
  { name: 'The Unlicense', abbreviation: 'Unlicense' },
  { name: 'zLib License', abbreviation: 'Zlib' },
]

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: `${consoleInputHelpers.pleaseEnter} the title of your project:`,
  },
  {
    type: 'input',
    name: 'description',
    message: `${consoleInputHelpers.pleaseEnter} purpose and functionality of this project in 2-3 sentences (${consoleInputHelpers.ifYouNotSure}):`,
  },
  {
    type: 'input',
    name: 'tableOfContents',
    message: `Select is table of contents is required for your project (${consoleInputHelpers.ifYouNotSure}):`,
  },
  {
    type: 'input',
    name: 'installation',
    message: `${consoleInputHelpers.pleaseEnter} installation instructions for your project:`,
  },
  {
    type: 'input',
    name: 'usage',
    message: `${consoleInputHelpers.pleaseEnter} instructions and examples for use:`,
  },
  {
    type: 'input',
    name: 'screenshot',
    message: `${consoleInputHelpers.pleaseEnter} relative path to the image you want to use as the screenshot for your project (${consoleInputHelpers.ifYouDoNotHaveAny}):`,
  },
  {
    type: 'input',
    name: 'deployedUrl',
    message: `${consoleInputHelpers.pleaseEnter} URL where a user can access your deployed application. (${consoleInputHelpers.ifYouDoNotHaveAny}):`,
  },
  {
    type: 'checkbox',
    name: 'license',
    message: `Please select a license applicable to this project (${consoleInputHelpers.ifYouNotSure}):`,
    choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],
  },
  {
    type: 'input',
    name: 'dependencies',
    message: `List any project dependencies here (${consoleInputHelpers.ifYouDoNotHaveAny}):`,
  },
  {
    type: 'input',
    name: 'features',
    message: 'List some cool features about this project here (if any):',
  },
  {
    type: 'input',
    name: 'languagesAndTechnologies',
    message: `${consoleInputHelpers.pleaseEnter} languages or technologies associated with this project:`,
  },
  {
    type: 'input',
    name: 'authorName',
    message: 'Write your GitHub username here:',
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: 'Provide a valid email address for users to reach you for questions:',
    default: () => {},
    validate: function (authorEmail) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(authorEmail)

      if (valid) {
        console.log('Thank you for providing a valid email address.')
        return true
      } else {
        console.log('Please enter a valid email address.')
        return false
      }
    },
  },
  {
    type: 'input',
    name: 'contributors',
    message: `Please list any contributors. (Use GitHub usernames) (${consoleInputHelpers.ifYouDoNotHaveAny}):`,
    default: '',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide walkthrough of required tests (if applicable):',
  },
  {
    type: 'questions',
    name: 'questions',
    message: `${consoleInputHelpers.pleaseEnter} description of how to reach you for questions:`,
  },
]

module.exports = questions

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

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
