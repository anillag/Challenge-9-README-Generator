const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
        //title
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
        //description
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
        //install
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
        //usage
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
        //license
        {
            type: "list",
            name: "license",
            message: "Which license should apply?",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },
        //contributions
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
        //tests
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
        //questions
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
// logic to write to file
function writeToFile(data) {
    fs.writeFile("./dist/output.md", data, error => {
        if (error) {
            console.log(error);
            return;
        }
    })
}
//bring in the questions array
function init() {
    return inquirer.prompt(questions);
    };

// Function call to initialize app
init()
    .then((data) => {
        let markdown = generateMarkdown(data);
        writeToFile(markdown);
    });