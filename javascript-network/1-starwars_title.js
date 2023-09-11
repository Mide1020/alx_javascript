const request = require('request');

// Check if the movie ID argument is provided

if (process.argv.length < 3) {

  console.error('Usage: node 1-starwars_title.js <movie ID>');

  process.exit(1);

}

// Get the movie ID from the command line argument

const movieId = process.argv[2];

// Construct the URL for the Star Wars API

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

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

    const movieData = JSON.parse(body);

    const title = movieData.title;

    console.log(title);

  } catch (parseError) {

    console.error('Error parsing API response:', parseError.message);

    process.exit(1);

  }

});
