//102-add_me_maybe.js

//Define the  addMeMaybe function 
function addMeMaybe(number, theFunction) {
    number += 1;
    theFunction(number);
}

// Export the addMeMaybe function to make it visible from outside
module.exports.addMeMaybe = addMeMaybe;