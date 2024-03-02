const inquirer = require('inquirer');
const chalk = require('chalk');

const MENU_MSGS = require('./utils/json/menuMsgs.json');
const generateDefaultReadme = require('./lib/generateDefaultReadme');
const generateCustomReadme = require('./lib/generateCustomReadme');

const welcomeMessage = () => {
  console.log(chalk.green(MENU_MSGS.welcome));
  console.log('--------------------------------------');
};

const mainMenu = async () => {
  welcomeMessage();

  const choices = [
    { name: 'Default Template', value: 'default' },
    { name: 'Custom Template', value: 'custom' },
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
    case 'default':
      await generateDefaultReadme();
      break;
    case 'custom':
      await generateCustomReadme();
      break;
    case 'exit':
      console.log(MENU_MSGS.exitMessage);
      process.exit(0);
    default:
      console.log('Invalid option selected');
  }
};

mainMenu();
