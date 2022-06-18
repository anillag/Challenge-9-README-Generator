// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
        //title
        {
            type: "input",
            name: "title",
            message: "[1/9] Give your README a title.",
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
            message: "[2/9] What should your README's description say?",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        //toc
        {
            type: "input",
            name: "toc",
            message: "[3/9] What is your Table of Contents?",
            validate: tocInput => {
                if (tocInput) {
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
            message: "[4/9] Install?",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        //usage
        {
            type: "input",
            name: "usage",
            message: "[5/9] Usage?",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        //license
        {
            type: "input",
            name: "license",
            message: "[6/9] License?",
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        //contributions
        {
            type: "input",
            name: "contributions",
            message: "[7/9] Contributions?",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
        //tests
        {
            type: "input",
            name: "tests",
            message: "[8/9] Tests?",
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
            name: "questions",
            message: "[9/9] Questions?",
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log("Please enter a description.");
                    return false;
                }
            }
        },
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./temp/output.md", data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
    };

// Function call to initialize app
init()
    .then((data) => {
        let markdown = generateMarkdown(data);
        writeToFile(markdown);
    });
