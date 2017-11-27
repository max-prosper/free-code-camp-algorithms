// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
//
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.


function addTogether() {
  const args = [...arguments];

  function isNum(i) {
    return typeof i ==='number'
  }

  if (args.length === 1 && isNum(args[0])) {
    return function(x) {
      if(isNum(x)) {
        return args[0] + x;
      }
    }
  }

  if (isNum(args[0]) && isNum(args[1])) {
    return args[0] + args[1];
  }
}


addTogether(2, 3) // 5.
addTogether(2)(3) // 5.
addTogether("http://bit.ly/IqT6zt") // undefined.
addTogether(2, "3") // undefined.
addTogether(2)([3]) // undefined.
