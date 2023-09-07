// 3-rectangle.js

class Rectangle {

    constructor(w, h) {

      if (w > 0 && h > 0) {

        this.width = w;

        this.height = h;

      } else {

        // Create an empty object if w or h is not a positive integer or is 0

        return {};

      }

    }

    print() {

      for (let i = 0; i < this.height; i++) {

        console.log('X'.repeat(this.width));

      }

    }

  }

  module.exports = Rectangle;