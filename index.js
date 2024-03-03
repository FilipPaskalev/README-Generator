const chalk = require('chalk');
const inquirer = require('inquirer');
const path = require('path');

const MENU_MSGS = require('./utils/json/menuMsgs.json');
const generateBasicReadme = require('./lib/generators/generateBasicReadme');
const generateStandardReadme = require('./lib/generators/generateStandardReadme');
const generateProfessionalReadme = require('./lib/generators/generateProfessionalReadme');
const generateLicensesJsonFile = require('./lib/generators/generateLicensesJsonFile');
const generateLicensesOption = require('./lib/generators/generateLicensesOption');

const mainMenu = async () => {
  const distDir = path.join(__dirname, '../..', 'dist');

  console.log(chalk.green(MENU_MSGS.welcome));

  const choices = [
    { name: 'Basic Readme', value: 'basic' },
    { name: 'Custom Readme', value: 'custom' },
    { name: 'Professional Readme', value: 'professional' },
    new inquirer.Separator(),
    { name: chalk.red('Exit'), value: 'exit' },
  ];

  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: MENU_MSGS.mainMenu,
      choices: choices,
    },
  ]);

  switch (option) {
    case 'basic':
      await generateBasicReadme();
      break;
    case 'custom':
      await generateStandardReadme();
      break;
    case 'professional':
      await generateProfessionalReadme();
      break;
    case 'exit':
      console.log(MENU_MSGS.exitMessage);
      process.exit(0);
    default:
      console.log(MENU_MSGS.invalidOption);
  }
};

generateLicensesJsonFile();

mainMenu();
