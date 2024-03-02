const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const defaultReadmeContent = require('../utils/js/defaultReadmeContent');

const generateDefaultReadme = async () => {
  const distDir = path.join(__dirname, '..', 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  fs.writeFileSync(readmePath, defaultReadmeContent);
  console.log(chalk.green('Default README.md generated in dist directory.'));
};

module.exports = generateDefaultReadme;
