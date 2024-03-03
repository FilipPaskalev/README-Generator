const fs = require('fs');
const path = require('path'); // Import the path module
const chalk = require('chalk');
const inquirer = require('inquirer');

const defaultReadmeTemplate = require('../../utils/js/defaultReadmeTemplate');
const { generateLicenseBadge } = require('../generators/badgeGenerator');
const MENU_MSGS = require('../../utils/json/menuMsgs.json');
const PROMPT_MSGS = require('../../utils/json/promptMsgs.json');
const projectNameValidator = require('../validators/projectNameValidator');

const generateBasicReadme = async () => {
  const distDir = path.join(__dirname, '../../', 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: PROMPT_MSGS.title,
      validate: projectNameValidator,
    },
  ]);

  const badge = generateLicenseBadge();

  const readmeContentWithBadge = defaultReadmeTemplate.replace(
    '# [Your Project Title]',
    `# ${projectName}\n\n${badge}`
  );

  fs.writeFileSync(readmePath, readmeContentWithBadge);
  console.log(chalk.green(MENU_MSGS.successGenerated));
};

module.exports = generateBasicReadme;
