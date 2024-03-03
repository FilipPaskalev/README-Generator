const defaultProjectTitle = require('./defaultProjectTitle');
const defaultDescriptionSection = require('./defaultDescriptionSection');
const defaultInstallationSection = require('./defaultInstallationSection');
const defaultUsageSection = require('./defaultUsageSection');
const defaultContributingSection = require('./defaultContributingSection');
const defaultCreditsSection = require('./defaultCreditsSection');
const defaultTestsSection = require('./defaultTestsSection');
const defaultQuestionsSection = require('./defaultQuestionsSection');
const defaultLicenseSection = require('./defaultLicenseSection');

const defaultReadmeTemplate = `# ${defaultProjectTitle}

## Description

${defaultDescriptionSection}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${defaultInstallationSection}

## Usage

${defaultUsageSection}

## Contributing

${defaultContributingSection}

## Credits

${defaultCreditsSection}

## Tests

${defaultTestsSection}

## Questions

${defaultQuestionsSection}

## License

${defaultLicenseSection}
`;

module.exports = defaultReadmeTemplate;
