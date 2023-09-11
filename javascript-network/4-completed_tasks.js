const request = require('request');

// Check if the API URL argument is provided

if (process.argv.length < 3) {

  console.error('Usage: node 4-completed_tasks.js <API URL>');

  process.exit(1);

}

// Get the API URL from the command line argument

const apiUrl = process.argv[2];

// Send a GET request to the API

request.get(apiUrl, (error, response, body) => {

  if (error) {

    console.error(`Error: ${error.message}`);

    process.exit(1);

  }

  if (response.statusCode !== 200) {

    console.error(`Error: Failed to fetch data. Status code: ${response.statusCode}`);

    process.exit(1);

  }

  try {

    const tasks = JSON.parse(body);

    // Create an object to store the count of completed tasks for each user

    const completedTasksByUser = {};

    // Iterate through the tasks and count completed tasks for each user

    tasks.forEach(task => {

      if (task.completed) {

        if (completedTasksByUser.hasOwnProperty(task.userId)) {

          completedTasksByUser[task.userId]++;

        } else {

          completedTasksByUser[task.userId] = 1;

        }

      }

    });

    console.log(completedTasksByUser);

  } catch (parseError) {

    console.error('Error parsing API response:', parseError.message);

    process.exit(1);

  }

});
