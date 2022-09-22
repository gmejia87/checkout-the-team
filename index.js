const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const { pageTemplate } = require("./src/pageTemplate");
const { fileURLToPath } = require("url");

const teamArray = [];

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "Which type of employee do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "None, generate page"],
      },
    ])
    .then((answer) => {
      if (answer.type === "None, generate page") {
        generatePage();
      } else baseQuestions(answer.type);
    });
}

function baseQuestions(employeeType) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
    ])
    .then((answers) => {
      if (employeeType === "Manager") {
        managerQuestion(answers);
      } else if (employeeType === "Engineer") {
        engineerQuestion(answers);
      } else if (employeeType === "Intern") {
        internQuestion(answers);
      }
    });
}

function managerQuestion(manager) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((answer) => {
      teamArray.push(
        new Manager(
          manager.name,
          manager.id,
          manager.email,
          answer.officeNumber
        )
      );
      console.log(`${manager.name} added to the database.`);
      newEmployee();
    });
}

function engineerQuestion(engineer) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub?",
      },
    ])
    .then((answer) => {
      teamArray.push(
        new Engineer(engineer.name, engineer.id, engineer.email, answer.github)
      );
      console.log(`${engineer.name} added to the database.`);
      newEmployee();
    });
}

function internQuestion(intern) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((answer) => {
      teamArray.push(
        new Intern(intern.name, intern.id, intern.email, answer.school)
      );
      console.log(`${intern.name} added to the database.`);
      newEmployee();
    });
}

newEmployee();

function generatePage() {
  console.log("writing file...");
  fs.writeFileSync(
    path.join(path.resolve(__dirname, "dist"), "team.html"),
    pageTemplate(),
    "utf-8"
  );
}
