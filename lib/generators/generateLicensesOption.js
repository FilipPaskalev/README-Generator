const fs = require('fs');
const path = require('path');

function generateLicensesOption() {
  const jsonFilePath = path.join(__dirname, '../../utils/json/licenses.json');

  if (!fs.existsSync(jsonFilePath)) {
    console.error(`Error: File '${jsonFilePath}' does not exist.`);
    return [];
  }

  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  const licenses = JSON.parse(jsonData);

  const nonHeaderLicenses = licenses.filter((license) => !license.isItHeader);

  // console.log(nonHeaderLicenses.map((license) => license.longName));
  return nonHeaderLicenses.map((license) => license.longName);
}

module.exports = generateLicensesOption;
