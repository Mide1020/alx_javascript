/ Log to the console Start of the execution queue

console.log('Start of the execution queue');

// Use setTimeout with a delay of 0 to log the final code block to be executed

setTimeout(function () {

  console.log('Final code block to be executed');

}, 0);

// Use a loop to log numbers from 1 to 100

for (let i = 1; i <= 100; i++) {

  console.log(i);

}

// Log to the console End of the loop printing

console.log('End of the loop printing');