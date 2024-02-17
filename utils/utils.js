const licenses = require('./licenses');

const consoleInputHelpers = {
  pleaseEnter: 'Please enter',
  ifYouDoNotHaveAny: "If you don't have any, just press enter",
  ifYouNotSure: 'If you are not sure, you can add it later in the README.md file',
  ifApplicable: 'if applicable',
};

// Function to extract license abbreviations from the licensesMap
function getLicenseAbbreviations() {
  return Array.from(licenses.keys());
}
