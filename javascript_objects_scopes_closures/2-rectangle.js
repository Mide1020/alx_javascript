#!/usr/bin/node
class Rectangle {

  // initialize an instance with these values
  constructor (w, h) {
      if (w && h > 0) {
          this.width = w;
          this.height = h;
      }else {
          return 'Rectangle {}';
      }
  }
}

module.exports = Rectangle;