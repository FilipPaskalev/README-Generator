function renderLicenseBadge(license) {}

function renderProjectTitle(title) {
    return `# ${title}`
}

function renderDescription(description) {
    return `## Description\n\n${description}`
}

function renderTOC(tableOfContents) {
    return `## Table of Contents\n\n${tableOfContents}`
}

function renderInstallation(installation) {
    return `## Installation\n\n${installation}`
}

function renderUsage(usage) {
    return `## Usage\n\n${usage}`
}

function renderFeatures(features) {
    return `## Features\n\n${features}`
}

function renderContributing(contributing) {
    return `## Contributing\n\n${contributing}`
}

function renderCredits(credits) {
    return `## Credits\n\n${credits}`
}

function renderLicense(license) {
    return `## License\n\n${license}`
}

function renderTests(tests) {
    return `## Tests\n\n${tests}`
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`
}

module.exports = generateMarkdown
