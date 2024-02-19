import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

import generateMarkdown from './scripts/generateMarkdown.js';
import promptQuestions from './utils/prompt/questions.js';

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  const fileName = 'README.md';
  const outputPath = `./dist/${fileName}`;

  console.log(`
  Welcome to the Professional README.md Generator
  ===================================================
  Please answer the following questions to 
  generate your README.md file.
  `);

  inquirer.prompt(promptQuestions).then((userResponse) => {
    console.log('Generating Professional README.md File...');
    writeToFile(outputPath, generateMarkdown({ ...userResponse }));
    console.log(`Your README.md file has been successfully generated at ${outputPath}`);
  });
}

// function call to initialize program
init();
