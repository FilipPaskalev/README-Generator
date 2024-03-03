const generateLicenseBadge = (licenseType = 'Unlicensed') => {
  return `![License: ${licenseType}](https://img.shields.io/badge/license-${encodeURIComponent(licenseType)}-blue.svg)`;
};

module.exports = {
  generateLicenseBadge,
};
