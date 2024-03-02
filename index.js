const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

const MENU_MSGS = require('./utils/json/menuMsgs.json');
const defaultReadmeContent = require('./utils/js/defaultReadmeContent');

const welcomeMessage = () => {
  console.log(chalk.green(MENU_MSGS.welcome));
  console.log('--------------------------------------');
};

const generateDefaultReadme = () => {
  const distDir = path.join(__dirname, 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  fs.writeFileSync(readmePath, defaultReadmeContent);
  console.log(chalk.green(MENU_MSGS.defaultGenerated));
};

const customTemplateHandler = async () => {
  console.log('Handle custom template option');
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
      generateDefaultReadme();
      break;
    case 'custom':
      await customTemplateHandler();
      break;
    case 'exit':
      console.log(MENU_MSGS.exitMessage);
      process.exit(0);
    default:
      console.log('Invalid option selected');
  }
};

mainMenu();
