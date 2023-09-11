const request = require('request');

const fs = require('fs');

// Check if both URL and file path arguments are provided

if (process.argv.length < 4) {

  console.error('Usage: node 3-request_store.js <URL> <file path>');

  process.exit(1);

}

// Get the URL and file path from the command line arguments

const url = process.argv[2];

const filePath = process.argv[3];

// Send a GET request to the specified URL

request.get(url, (error, response, body) => {

  if (error) {

    console.error(`Error: ${error.message}`);

    process.exit(1);

  }

  if (response.statusCode !== 200) {

    console.error(`Error: Failed to fetch data. Status code: ${response.statusCode}`);

    process.exit(1);

  }

  // Write the response body to the specified file path with UTF-8 encoding

  fs.writeFile(filePath, body, 'utf-8', (writeError) => {

    if (writeError) {

      console.error(`Error writing to file: ${writeError.message}`);

      process.exit(1);

    }

    console.log(`Data saved to ${filePath}`);

  });

});
