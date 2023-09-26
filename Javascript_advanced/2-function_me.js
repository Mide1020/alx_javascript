function welcomeMessage(fullName) {

    return function () {

      alert('Welcome ' + fullName);

    };

  }

  // Create three variables with closures

  const guillaume = welcomeMessage('Guillaume');

  const alex = welcomeMessage('Alex');

  const fred = welcomeMessage('Fred');

  // Call the variables as functions to display the alerts

  guillaume();

  alex();

  fred();
function createClassRoom(numbersOfStudents) {

    function studentSeat(seat) {

      return function () {

        return seat;

      };

    }

    const students = [];

    for (let i = 0; i < numbersOfStudents; i++) {

      students.push(studentSeat(i + 1));

    }

    return students;

  }

  const classRoom = createClassRoom(10);

  console.log(classRoom[0]()); // Should return 1

  console.log(classRoom[3]()); // Should return 4

  console.log(classRoom[9]()); // Should return 10