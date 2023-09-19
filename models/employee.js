const connection = require('../db/connection');

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
  viewAllEmployees,
  addEmployee,
};
