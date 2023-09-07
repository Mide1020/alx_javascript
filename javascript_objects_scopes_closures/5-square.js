// 5-square.js

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {

  constructor(size) {

    super(size, size); // Call the constructor of Rectangle with the same size for width and height

  }

}

module.exports = Square;