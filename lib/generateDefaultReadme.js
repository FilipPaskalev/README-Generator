const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const defaultReadmeContent = require('../utils/js/defaultReadmeContent');
const { generateLicenseBadge } = require('./badgeGenerator');

const generateDefaultReadme = async (projectName) => {
  const distDir = path.join(__dirname, '..', 'dist');
  const readmePath = path.join(distDir, 'README.md');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // Generate license badge
  const badge = generateLicenseBadge();

  // Append badge after project name in defaultReadmeContent
  const readmeContentWithBadge = defaultReadmeContent.replace(
    '# [Your Project Title]',
    `# ${projectName} 
    
${badge}`
  );

  fs.writeFileSync(readmePath, readmeContentWithBadge);
  console.log(chalk.green('Default README.md generated in dist directory.'));
};

module.exports = generateDefaultReadme;
