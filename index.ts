#! /usr/bin/env node
// Important inquirer and chalk Packeges
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull welcome message 
console.log(chalk.bold.cyanBright("\n \t\tCode With AmmarKhan - Word Counter"));
console.log("=".repeat(60));

// Prompt the user to enter a Sentense
let answers = await inquirer.prompt([
    {
        name: "sentense",
        type: "input",
        message: "Enter a Sentense",
    }
]);

// Trimming the sentense and splitting it into words based on "spaces"
let words = answers.sentense.trim().split(" ");

// Analysis the user input sentense
console.log("=".repeat(60));
console.log(chalk.bold("- Sentense Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word  Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
