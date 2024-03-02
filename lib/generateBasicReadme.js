const fs = require('fs');
const path = require('path'); // Import the path module
const chalk = require('chalk');
const inquirer = require('inquirer');

const defaultReadmeContent = require('../utils/js/defaultReadmeContent');
const { generateLicenseBadge } = require('./badgeGenerator');
const MENU_MSGS = require('../utils/json/menuMsgs.json');

const generateBasicReadme = async () => {
  const distDir = path.join(__dirname, '..', 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  const projectNameValidator = (value) => {
    if (value.trim() === '') {
      return 'Project name cannot be empty.';
    }
    if (value.length > 50) {
      return 'Project name cannot be more than 50 characters long.';
    }
    return true;
  };

  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the name of your project:',
      validate: projectNameValidator,
    },
  ]);

  const badge = generateLicenseBadge();

  // Append badge after project name in defaultReadmeContent
  const readmeContentWithBadge = defaultReadmeContent.replace(
    '# [Your Project Title]',
    `# ${projectName}\n\n${badge}`
  );

  fs.writeFileSync(readmePath, readmeContentWithBadge);
  console.log(chalk.green(MENU_MSGS.successGenerated));
};

module.exports = generateBasicReadme;
