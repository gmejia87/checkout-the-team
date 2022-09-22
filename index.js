const inquirer = require("inquirer");
const generatePage = require("./src/pageTemplate");

const promptEmployee = () => {
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
      message: "What is the employee's email? (Required)",
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

const promptEngineer = (engineer) => {
  console.log(`
  =================
  Add Engineer Info
  =================
  `);
  //add to employee info with engineer github
  return inquirer.prompt([
    {
      type: "input",
      name: "link",
      message: "Enter engineer's GitHub username. (Required)",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter GitHub username.");
          return false;
        }
      },
    },
  ]);
};

const promptIntern = (intern) => {
  console.log(`
  =================
  Add Intern Info
  =================
  `);
  //add to employee info with intern school
  return inquirer.prompt([
    {
      type: "input",
      name: "school",
      message: "Please enter Intern's school name. (Required)",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter school name.");
          return false;
        }
      },
    },
  ]);
};

promptEmployee()
  .then(promptEngineer)
  .then((engineer) => {
    return generatePage(engineer);
  })
  .then(promptIntern)
  .then((intern) => {
    return generatePage(intern);
  });
