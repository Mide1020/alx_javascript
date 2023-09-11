const request = require('request');

// Check if the API URL argument is provided

if (process.argv.length < 3) {

  console.error('Usage: node 2-starwars_count.js <API URL>');

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

    const movieData = JSON.parse(body);

    const wedgeAntillesMovies = movieData.results.filter(movie =>

      movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')

    );

    console.log(wedgeAntillesMovies.length);

  } catch (parseError) {

    console.error('Error parsing API response:', parseError.message);

    process.exit(1);

  }

});
