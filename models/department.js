const connection = require('../db/connection');

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

// Export the functions
module.exports = {
  viewAllDepartments,
  addDepartment,
};

