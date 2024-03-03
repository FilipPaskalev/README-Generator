const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

const defaultReadmeContent = require('../utils/js/defaultReadmeContent');
const { generateLicenseBadge } = require('./badgeGenerator');
const MENU_MSGS = require('../utils/json/menuMsgs.json');

const generateStandardReadme = async () => {
  const distDir = path.join(__dirname, '..', 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // Prompt user for project title
  const { projectTitle } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: MENU_MSGS.enterProjectTitle,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.projectTitleEmpty;
        }
        return true;
      },
    },
  ]);

  // Prompt user for project description
  const { projectDescription } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectDescription',
      message: MENU_MSGS.enterProjectDescription,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.projectDescriptionEmpty;
        }
        return true;
      },
    },
  ]);

  // Prompt user for installation instructions
  const { installationInstructions } = await inquirer.prompt([
    {
      type: 'input',
      name: 'installationInstructions',
      message: MENU_MSGS.enterInstallationInstructions,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.installationInstructionsEmpty;
        }
        return true;
      },
    },
  ]);

  // Prompt user for usage instructions
  const { usageInstructions } = await inquirer.prompt([
    {
      type: 'input',
      name: 'usageInstructions',
      message: MENU_MSGS.enterUsageInstructions,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.usageInstructionsEmpty;
        }
        return true;
      },
    },
  ]);

  // Prompt user for contributing guidelines
  const { contributingGuidelines } = await inquirer.prompt([
    {
      type: 'input',
      name: 'contributingGuidelines',
      message: MENU_MSGS.enterContributingGuidelines,
      default: 'Contributions are welcome. Please follow these guidelines...',
    },
  ]);

  // Prompt user for tests information
  const { testsInformation } = await inquirer.prompt([
    {
      type: 'input',
      name: 'testsInformation',
      message: MENU_MSGS.enterTestsInformation,
      default: 'Describe how to run tests for your project...',
    },
  ]);

  // Prompt user for questions section
  const { questionsSection } = await inquirer.prompt([
    {
      type: 'input',
      name: 'questionsSection',
      message: MENU_MSGS.enterQuestionsSection,
      default: 'If you have any questions, feel free to reach out...',
    },
  ]);

  // Prompt user for license type
  const { licenseType } = await inquirer.prompt([
    {
      type: 'input',
      name: 'licenseType',
      message: MENU_MSGS.enterLicenseType,
      default: 'MIT',
    },
  ]);

  // Generate license badge based on user input
  const badge = `[![License: ${licenseType}](https://img.shields.io/badge/License-${licenseType}-brightgreen.svg)](https://opensource.org/licenses/${licenseType})`;

  // Customize default readme content with user inputs
  let readmeContent = defaultReadmeContent
    .replace('[Your Project Title]', `# ${projectTitle}`)
    .replace(
      'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
      projectDescription
    )
    .replace(
      'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      installationInstructions
    )
    .replace(
      'Provide instructions and examples for use. Include screenshots as needed.',
      usageInstructions
    )
    .replace(
      'Contributions to the project are welcome and encouraged! Follow these steps to contribute:',
      contributingGuidelines
    )
    .replace('To run tests for the project, use the following commands:', testsInformation)
    .replace(
      'If you have any questions or need assistance, feel free to reach out:',
      questionsSection
    )
    .replace('Example:', '')
    .replace(
      'This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute the code as per the terms of the license. See the [LICENSE.md](LICENSE.md) file for more details.',
      badge
    );

  // Write content to README file
  fs.writeFileSync(readmePath, readmeContent);
  console.log(chalk.green(MENU_MSGS.successGenerated));
};

module.exports = generateStandardReadme;
