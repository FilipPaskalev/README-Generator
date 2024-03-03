const fs = require('fs');
const path = require('path');

const licensesDirectory = path.join(__dirname, '../../utils/licenseTemplates');

if (!fs.existsSync(licensesDirectory)) {
  console.error(`Error: Directory '${licensesDirectory}' does not exist.`);
  return;
}

const jsonDirectory = path.join(__dirname, '../../utils/json');

function generateLicensesJsonFile() {
  const files = fs.readdirSync(licensesDirectory);
  // console.log('Files in directory:', files);

  const licenses = files.map((fileName) => {
    const filePath = path.join(licensesDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const isHeader = fileName.includes('header');
    const shortName = fileName.replace('.txt', '').toUpperCase();

    const longName = shortName.replace(/_/g, ' ');

    return {
      name: fileName,
      content: fileContent,
      shortName: shortName,
      longName: longName,
      fileName: fileName,
      isItHeader: isHeader,
    };
  });

  // console.log('Generated licenses:', licenses);

  const jsonContent = JSON.stringify(licenses, null, 2);
  // console.log('Generated JSON content:', jsonContent);

  const jsonFilePath = path.join(jsonDirectory, 'licenses.json');
  fs.writeFileSync(jsonFilePath, jsonContent, 'utf-8');

  // console.log('Licenses JSON file created successfully.');
}

module.exports = generateLicensesJsonFile;
