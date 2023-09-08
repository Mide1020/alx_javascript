function incr(obj) {
  obj.value++;
}

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

incr(myObject); // Call the incr function to increment the value

console.log(myObject); // Print the updated myObject