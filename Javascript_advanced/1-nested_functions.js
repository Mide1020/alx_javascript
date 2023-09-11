// Step 1: Create a global variable named globalVariable

const globalVariable = 'Welcome';

// Step 2: Create the outer function

function outer() {

  // Step 3: Alert the content of globalVariable

  alert(globalVariable);

  // Step 4: Create a variable named course

  const course = 'Holberton';

  // Step 5: Create the inner function

  function inner() {

    // Step 6: Alert the content of globalVariable and course (concatenated)

    alert(globalVariable + ' ' + course);

    // Step 7: Create a variable named exclamation

    const exclamation = '!';

    // Step 8: Create the inception function

    function inception() {

      // Step 9: Alert the content of globalVariable, course, and exclamation (concatenated)

      alert(globalVariable + ' ' + course + exclamation);

    }

    // Step 10: Call the inception function

    inception();

  }

  // Step 11: Call the inner function

  inner();

}

// Step 12: Call the outer function

outer();

// Step 13: Call the inner function within outer

// outer(); // Uncomment this line to call inner within outer

// Step 14: Call the inception function within inner

// outer(); // Uncomment this line to call inception within inner