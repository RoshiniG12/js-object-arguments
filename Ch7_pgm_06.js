// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

console.log(line(30));
console.log(line(40));
console.log(line(50));

console.log("\n");

// Further Adventures

// Testing line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log("Line length: " + i);
  console.log(line(i));
  console.log("\n");
}

// Define a spaces function
var spaces = function (spaceLength) {
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return " ".repeat(spaceLength);
};

console.log("Spaces:");
console.log(spaces(20));
console.log(spaces(40));
console.log(spaces(50));
console.log("\n");

// Define an emptyBox function
var emptyBox = function (boxWidth) {
  var topBottomLine = "=";
  var middleLine = "=";

  for (var i = 1; i < boxWidth - 1; i++) {
      if (i === 1 || i === boxWidth - 2) {
          topBottomLine += "=";
          middleLine += " ";
      } else {
          topBottomLine += " ";
          middleLine += " ";
      }
  }

  topBottomLine += "=";
  middleLine += "=";

  var box = topBottomLine + "\n";
  for (var j = 1; j <= 3; j++) {
      box += middleLine + "\n";
  }
  box += topBottomLine;

  return box;
};

console.log("Empty Box:");
console.log(emptyBox(12));
console.log(emptyBox(20));

  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */