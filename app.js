const inquirer = require("inquirer");
const { startMenu } = require("./views/prompts");

// Connect to the database and start the application
const connection = require("./db/connection");

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
  startMenu();
});
