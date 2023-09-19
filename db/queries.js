const connection = require('./connection');

// Function to view all departments
function viewAllDepartments(callback) {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// Function to add a department
function addDepartment(name, callback) {
  const query = 'INSERT INTO department (name) VALUES (?)';
  const values = [name];
  connection.query(query, values, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// Function to view all roles
function viewAllRoles(callback) {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// Function to add a role
function addRole(title, salary, departmentId, callback) {
  const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
  const values = [title, salary, departmentId];
  connection.query(query, values, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// Function to view all employees
function viewAllEmployees(callback) {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// Function to add an employee
function addEmployee(firstName, lastName, roleId, managerId, callback) {
  const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  const values = [firstName, lastName, roleId, managerId];
  connection.query(query, values, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// Export the functions
module.exports = {
  viewAllDepartments,
  addDepartment,
  viewAllRoles,
  addRole,
  viewAllEmployees,
  addEmployee,
};
