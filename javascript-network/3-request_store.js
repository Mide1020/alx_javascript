#!/usr/bin/node
const request = require('request');
const fs = require('fs');

const url = process.argv[2]; // Get the URL from the command line argument
const filePath = process.argv[3]; // Get the file path from the command line argument

if (!url || !filePath) {
  console.error('Please provide both the URL and file path as arguments.');
  process.exit(1);
}

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Write the response body to the specified file (UTF-8 encoded)
  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      process.exit(1);
    }
  });
});