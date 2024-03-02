const inquirer = require('inquirer');
const chalk = require('chalk');

const MENU_MSGS = require('./utils/json/menuMsgs.json');
const generateBasicReadme = require('./lib/generateBasicReadme');
const generateStandardReadme = require('./lib/generateStandardReadme');
const generateProfessionalReadme = require('./lib/generateProfessionalReadme');

const welcomeMessage = () => {
  console.log(chalk.green(MENU_MSGS.welcome));
  console.log('--------------------------------------');
};

const mainMenu = async () => {
  welcomeMessage();

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

mainMenu();
