const inquirer = require('inquirer');
const { viewAllDepartments, addDepartment } = require('../models/department'); // Import department functions
const { viewAllRoles, addRole } = require('../models/role'); // Import role functions
const { viewAllEmployees, addEmployee } = require('../models/employee'); // Import employee functions
const { formatDepartments, formatRoles, formatEmployees } = require('./formatter'); // Import formatter functions

// Define inquirer prompts and CLI interface functions
function startMenu() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewAllDepartments((data) => {
            const formattedDepartments = formatDepartments(data);
            console.table(formattedDepartments);
            startMenu();
          });
          break;
        case 'View all roles':
          viewAllRoles((data) => {
            const formattedRoles = formatRoles(data);
            console.table(formattedRoles);
            startMenu();
          });
          break;
        case 'View all employees':
          viewAllEmployees((data) => {
            const formattedEmployees = formatEmployees(data);
            console.table(formattedEmployees);
            startMenu();
          });
          break;
        case 'Add a department':
          addDepartmentPrompt();
          break;
        case 'Add a role':
          addRolePrompt();
          break;
        case 'Add an employee':
          addEmployeePrompt();
          break;
        case 'Exit':
          connection.end();
          console.log('Goodbye!');
          break;
        default:
          connection.end();
      }
    });
}

function addDepartmentPrompt() {
  inquirer
    .prompt({
      name: 'name',
      type: 'input',
      message: 'Enter the name of the new department:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Department name cannot be empty';
        }
        return true;
      },
    })
    .then((answer) => {
      const departmentName = answer.name;
      addDepartment(departmentName, (result) => {
        console.log(`New department "${departmentName}" added!`);
        startMenu();
      });
    });
}

function addRolePrompt() {
    inquirer
      .prompt([
        {
          name: 'title',
          type: 'input',
          message: 'Enter the title of the new role:',
          validate: (input) => {
            if (input.trim() === '') {
              return 'Role title cannot be empty';
            }
            return true;
          },
        },
        {
          name: 'salary',
          type: 'number',
          message: 'Enter the salary for the new role:',
          validate: (input) => {
            if (isNaN(input) || input <= 0) {
              return 'Please enter a valid positive salary';
            }
            return true;
          },
        },
        {
          name: 'department_id',
          type: 'number',
          message: 'Enter the department ID for the new role:',
          validate: (input) => {
            if (isNaN(input) || input <= 0) {
              return 'Please enter a valid positive department ID';
            }
            return true;
          },
        },
      ])
      .then((answers) => {
        const { title, salary, department_id } = answers;
        addRole(title, salary, department_id, (result) => {
          console.log(`New role "${title}" added!`);
          startMenu();
        });
      });
  }
  
  function addEmployeePrompt() {
    inquirer
      .prompt([
        {
          name: 'first_name',
          type: 'input',
          message: "Enter the employee's first name:",
          validate: (input) => {
            if (input.trim() === '') {
              return "Employee's first name cannot be empty";
            }
            return true;
          },
        },
        {
          name: 'last_name',
          type: 'input',
          message: "Enter the employee's last name:",
          validate: (input) => {
            if (input.trim() === '') {
              return "Employee's last name cannot be empty";
            }
            return true;
          },
        },
        {
          name: 'role_id',
          type: 'number',
          message: "Enter the employee's role ID:",
          validate: (input) => {
            if (isNaN(input) || input <= 0) {
              return 'Please enter a valid positive role ID';
            }
            return true;
          },
        },
        {
          name: 'manager_id',
          type: 'number',
          message: "Enter the manager's employee ID (or leave empty if none):",
        },
      ])
      .then((answers) => {
        const { first_name, last_name, role_id, manager_id } = answers;
        addEmployee(first_name, last_name, role_id, manager_id, (result) => {
          console.log(`New employee "${first_name} ${last_name}" added!`);
          startMenu();
        });
      });
  }
  

module.exports = {
  startMenu,
};

