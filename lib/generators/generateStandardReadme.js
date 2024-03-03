const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');

const defaultReadmeTemplate = require('../../utils/js/defaultReadmeTemplate');
const { generateLicenseBadge } = require('../generators/badgeGenerator');
const MENU_MSGS = require('../../utils/json/menuMsgs.json');
const PROMPT_MSGS = require('../../utils/json/promptMsgs.json');
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
      message: PROMPT_MSGS.title,
      validate: projectNameValidator,
    },
  ]);

  const { projectDescription } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectDescription',
      message: PROMPT_MSGS.description,
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
      message: PROMPT_MSGS.installation,
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
      message: PROMPT_MSGS.usage,
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
      message: PROMPT_MSGS.contributing,
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
      message: PROMPT_MSGS.tests,
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
      message: PROMPT_MSGS.questions,
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
      message: PROMPT_MSGS.license,
      validate: function (value) {
        if (value.trim() === '') {
          return MENU_MSGS.licenseTypeEmpty;
        }
        return true;
      },
    },
  ]);

  const badge = generateLicenseBadge(licenseType);

  let readmeContent = defaultReadmeTemplate
    .replace(defaultProjectTitle, `${projectTitle}\n\n${badge}`)
    .replace(defaultDescriptionSection, projectDescription)
    .replace(defaultInstallationSection, installationInstructions)
    .replace(defaultUsageSection, usageInstructions)
    .replace(defaultContributingSection, contributingGuidelines)
    .replace(defaultTestsSection, testsInformation)
    .replace(defaultQuestionsSection, questionsSection)
    .replace(defaultLicenseSection, badge);

  fs.writeFileSync(readmePath, readmeContent);
  console.log(chalk.green(MENU_MSGS.successGenerated));
};

module.exports = generateStandardReadme;
