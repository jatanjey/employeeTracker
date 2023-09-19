import("inquirer").then((inquirer) => {
    const { startMenu } = require("./views/prompts");

    // Connect to the database and start the application
    const connection = require("./db/connection");

    connection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL database");
      startMenu();
    });
  })
  .catch((error) => {
    // Handle any errors that may occur during dynamic import
    console.error("Error importing 'inquirer':", error);
  });

