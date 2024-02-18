import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

import generateMarkdown from './scripts/generateMarkdown.js';
import questions from './utils/questions.js';

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  const fileName = 'README.md';
  const outputPath = `./dist/${fileName}`;

  console.log('Welcome to the Professional README.md Generator');

  inquirer.prompt(questions).then((responses) => {
    console.log('Creating Professional README.md File...');
    writeToFile(outputPath, generateMarkdown({ ...responses }));
  });
}

// function call to initialize program
init();
