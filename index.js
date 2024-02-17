const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./scripts/generateMarkdown')
const questions = require('./utils/questions')

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
  let fileName = 'Readme.md'
  console.log('Welcome to the Professional README.md Generator')

  inquirer.prompt(questions).then((responses) => {
    console.log('Creating Professional README.md File...')
    writeToFile('./dist/README.md', generateMarkdown({ ...responses }))
  })
}

// function call to initialize program
init()
