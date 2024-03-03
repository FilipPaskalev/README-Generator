const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

const defaultReadmeTemplate = require('../../utils/js/defaultReadmeTemplate');
const { generateLicenseBadge } = require('../generators/badgeGenerator');
const MENU_MSGS = require('../../utils/json/menuMsgs.json');
const projectNameValidator = require('../validators/projectNameValidator');
const defaultProjectTitle = require('../../utils/js/defaultProjectTitle');
const defaultDescriptionSection = require('../../utils/js/defaultDescriptionSection');
const defaultInstallationSection = require('../../utils/js/defaultInstallationSection');
const defaultUsageSection = require('../../utils/js/defaultUsageSection');
const defaultTestsSection = require('../../utils/js/defaultTestsSection');
const defaultContributingSection = require('../../utils/js/defaultContributingSection');
const defaultQuestionsSection = require('../../utils/js/defaultQuestionsSection');
const defaultLicenseSection = require('../../utils/js/defaultLicenseSection');

const generateStandardReadme = async () => {
  const distDir = path.join(__dirname, '../../', 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  const { projectTitle } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: MENU_MSGS.enterProjectTitle,
      validate: projectNameValidator,
    },
  ]);

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

  const { contributingGuidelines } = await inquirer.prompt([
    {
      type: 'input',
      name: 'contributingGuidelines',
      message: MENU_MSGS.enterContributingGuidelines,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.contributingGuidelinesEmpty;
        }
        return true;
      },
    },
  ]);

  const { testsInformation } = await inquirer.prompt([
    {
      type: 'input',
      name: 'testsInformation',
      message: MENU_MSGS.enterTestsInformation,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.testsInformationEmpty;
        }
        return true;
      },
    },
  ]);

  const { questionsSection } = await inquirer.prompt([
    {
      type: 'input',
      name: 'questionsSection',
      message: MENU_MSGS.enterQuestionsSection,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.questionsSectionEmpty;
        }
        return true;
      },
    },
  ]);

  const { licenseType } = await inquirer.prompt([
    {
      type: 'input',
      name: 'licenseType',
      message: MENU_MSGS.enterLicenseType,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.licenseTypeEmpty;
        }
        return true;
      },
    },
  ]);

  const badge = generateLicenseBadge(licenseType);

  // Customize default readme content with user inputs
  let readmeContent = defaultReadmeTemplate
    .replace(defaultProjectTitle, `${projectTitle}\n\n${badge}`)
    .replace(defaultDescriptionSection, projectDescription)
    .replace(defaultInstallationSection, installationInstructions)
    .replace(defaultUsageSection, usageInstructions)
    .replace(defaultContributingSection, contributingGuidelines)
    .replace(defaultTestsSection, testsInformation)
    .replace(defaultQuestionsSection, questionsSection)
    .replace(defaultLicenseSection, badge);

  // Write content to README file
  fs.writeFileSync(readmePath, readmeContent);
  console.log(chalk.green(MENU_MSGS.successGenerated));
};

module.exports = generateStandardReadme;
