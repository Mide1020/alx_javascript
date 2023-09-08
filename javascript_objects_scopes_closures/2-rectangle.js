#!/usr/bin/node
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

  }

  module.exports = Rectangle;

  if (require.main === module) {

    const args = process.argv.slice(2);

    if (args.length === 2) {

      const width = parseInt(args[0]);

      const height = parseInt(args[1]);

      const r = new Rectangle(width, height);

      console.log(`Instance width: ${r.width} - height: ${r.height}`);

    } else if (args.length === 1) {

      const width = parseInt(args[0]);

      const r = new Rectangle(width);

      console.log(`Instance width: ${r.width}`);

    } else {

      const r = new Rectangle();

      console.log(`Instance no argument`);

    }

  }