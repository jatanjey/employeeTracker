const connection = require('../db/connection');

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

// Export the functions
module.exports = {
  viewAllRoles,
  addRole,
};
