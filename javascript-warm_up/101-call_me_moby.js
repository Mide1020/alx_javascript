//.call_me_moby.js

//Define the callMeMoby function
function callMeMoby(x, theFunction)
{
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}
// Export the callMeMobby function to make it visible from outside
module.exports.callMeMoby = this.callMeMoby;