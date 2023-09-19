// Functions for formatting and displaying data
function formatDepartments(departments) {
    // Create an array of objects with the required format for console.table
    const formattedDepartments = departments.map((department) => {
      return {
        ID: department.id,
        Name: department.name,
      };
    });
  
    return formattedDepartments;
  }
  
  export default {
    formatDepartments,
  };
  