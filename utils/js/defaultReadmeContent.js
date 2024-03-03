const defaultReadmeContent = `# [Your Project Title]

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

Example:

To install the project, follow these steps:
1. **Prerequisites:** Ensure that you have \[Node.js\]\(https://nodejs.org/\) and \[npm\]\(https://www.npmjs.com/\) installed on your system.
2. **Clone the repository:** Use Git to clone the project repository to your local machine.
    \`\`\`
    git clone https://github.com/your-username/your-project.git
    \`\`\`
3. **Navigate to the project directory:** Change your current directory to the cloned project folder.
    \`\`\`
    cd your-project
    \`\`\`
4. **Install dependencies:** Run npm install to install the necessary dependencies.
    \`\`\`
    npm install
    \`\`\`

## Usage
Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

\`\`\`md
![alt text](assets/images/screenshot.png)
\`\`\`

To use the project, follow these guidelines:

- **Start the application:** Run the main script file using Node.js.
    \`\`\`
    node app.js
    \`\`\`
- **Follow on-screen instructions:** Interact with the application based on the prompts and menus displayed.
- **Explore features:** Experiment with different functionalities to understand the capabilities of the project.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

Example:

This project is licensed under the \[MIT License\]\(LICENSE.md\). You are free to use, modify, and distribute the code as per the terms of the license. See the \[LICENSE.md\]\(LICENSE.md\) file for more details.

## Contributing

Contributions to the project are welcome and encouraged! Follow these steps to contribute:
1. **Fork the repository:** Fork the project repository to your GitHub account.
2. **Create a new branch:** Create a new branch for your feature or bug fix.
3. **Make changes:** Implement your changes or additions to the codebase.
4. **Commit changes:** Commit your changes with descriptive commit messages.
5. **Push changes:** Push your commits to your forked repository.
6. **Create a pull request:** Submit a pull request to the main project repository for review and merge.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## Tests

To run tests for the project, use the following commands:
- **Unit tests:** Execute unit tests using the test runner of your choice.
    \`\`\`
    npm test
    \`\`\`
- **Integration tests:** Run integration tests to ensure seamless interaction between components.
    \`\`\`
    npm run integration-test
    \`\`\`
- **Coverage analysis:** Generate code coverage reports to assess the effectiveness of your tests.
    \`\`\`
    npm run coverage
    \`\`\`

## Questions

If you have any questions or need assistance, feel free to reach out:
- **Email:** \[your.email@example.com\]\(mailto:your.email@example.com\)
- **GitHub Issues:** \[Project Issues\]\(https://github.com/your-username/your-project/issues\)
- **Community Forums:** Join our community forums to engage with other users and developers.
`;

module.exports = defaultReadmeContent;
