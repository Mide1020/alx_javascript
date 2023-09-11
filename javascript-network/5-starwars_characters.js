const request = require('request');

// Check if the movie ID argument is provided

if (process.argv.length < 3) {

  console.error('Usage: node 5-starwars_characters.js <Movie ID>');

  process.exit(1);

}

// Get the Movie ID from the command line argument

const movieId = process.argv[2];

// Construct the URL for the Star Wars API to fetch the movie details

const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Send a GET request to the API to fetch the movie details

request.get(movieUrl, (error, response, movieBody) => {

  if (error) {

    console.error(`Error: ${error.message}`);

    process.exit(1);

  }

  if (response.statusCode !== 200) {

    console.error(`Error: Failed to fetch movie data. Status code: ${response.statusCode}`);

    process.exit(1);

  }

  try {

    const movieData = JSON.parse(movieBody);

    const characterUrls = movieData.characters;

    // Fetch and print character names

    Promise.all(http://characterUrls.map(fetchCharacterName))

      .then(characterNames => {

        characterNames.forEach(characterName => {

          console.log(characterName);

        });

      })

      .catch(fetchError => {

        console.error('Error fetching character names:', fetchError.message);

        process.exit(1);

      });

  } catch (parseError) {

    console.error('Error parsing movie data:', parseError.message);

    process.exit(1);

  }

});

// Function to fetch the character name from the character URL

function fetchCharacterName(characterUrl) {

  return new Promise((resolve, reject) => {

    request.get(characterUrl, (error, response, characterBody) => {

      if (error) {

        reject(error);

        return;

      }

      if (response.statusCode !== 200) {

        reject(new Error(`Failed to fetch character data. Status code: ${response.statusCode}`));

        return;

      }

      try {

        const characterData = JSON.parse(characterBody);

        resolve(http://characterData.name);

      } catch (parseError) {

        reject(parseError);

      }

    });

  });

}