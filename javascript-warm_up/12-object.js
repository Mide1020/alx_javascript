const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

for (let i = 0; i < lines.length; i++) {
  const updatedLine = lines[i].replace("cool", "89");
  console.log(updatedLine);
}