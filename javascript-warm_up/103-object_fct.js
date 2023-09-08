function incr(obj) {
  obj.value++;
  obj.incr = incr; // Assign the function to the incr property
}

const myObject = {
  type: 'object',
  value: 12
};

console.log(myObject);

incr(myObject); // Call the incr function to increment the value

console.log(myObject);

incr(myObject); // Call the incr function again

console.log(myObject);

incr(myObject); // Call the incr function multiple times

console.log(myObject);