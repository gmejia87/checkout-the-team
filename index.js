const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name? (Required)",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter employee's name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email?",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter employee's email.");
        }
      },
    },
  ]);
};

const promptEngineer = () => {
  console.log(`
  =================
  Add a Engineer.
  =================
  `);
  //add engineer info
};

promptUser();

promptEngineer();
