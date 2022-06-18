// Creates license badge, or leaves it blank
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } return `![License](https://img.shields.io/badge/License-${license}-success)`;
}

// Creates TOC link for license, or leaves it blank
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } return "- [License](#license)"
}

// Creates license section, or leaves it blank
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } return `## License
  
  This project is licensed under the ${license} license.
  
  `
}

// Creates dynamically generated markdown for README.md
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions

If you have questions, reach out to me via e-mail:  ${data.email}

Visit me on GitHub:  https://www.github.com/${data.githubusername}
`;
}

module.exports = generateMarkdown;