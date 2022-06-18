const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for collecting user input
const questions = [
        // Title
        {
            type: "input",
            name: "title",
            message: "Give your README a title.",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title.");
                    return false;
                }
            }
        },
        // Description
        {
            type: "input",
            name: "description",
            message: "What should your README's description say?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        // Install
        {
            type: "input",
            name: "install",
            message: "What are your installation instructions?",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please enter instructions.");
                    return false;
                }
            }
        },
        // Usage
        {
            type: "input",
            name: "usage",
            message: "Describe your project's usage?",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter usage data.");
                    return false;
                }
            }
        },
        // License
        {
            type: "list",
            name: "license",
            message: "Which license should apply?",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        // Contributions
        {
            type: "input",
            name: "contributions",
            message: "How can users contribute to your project?",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log("Please enter your contribution guidelines.");
                    return false;
                }
            }
        },
        // Tests
        {
            type: "input",
            name: "tests",
            message: "How do users run tests?",
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        // Questions, E-mail
        {
            type: "input",
            name: "email",
            message: "If users have questions, what e-mail address can they use to contact you?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an e-mail address.");
                    return false;
                }
            }
        },
        // Questions, GitHub username
        {
            type: "input",
            name: "githubusername",
            message: "What is your GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your username.");
                    return false;
                }
            }
        },
    ];
// Logic to write to file
function writeToFile(data) {
    fs.writeFile("./dist/output.md", data, error => {
        if (error) {
            console.log(error);
            return;
        }
    })
}
// Bring in the questions array to Inquirer
function init() {
    return inquirer.prompt(questions);
    };

// Function call to initialize
init()
    .then((data) => {
        let markdown = generateMarkdown(data);
        writeToFile(markdown);
    });