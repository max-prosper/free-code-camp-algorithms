// Find the smallest common multiple of the provided parameters that can be
//evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//
// The range will be an array of two numbers that will not necessarily be in numerical order.
//
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.


function smallestCommons(arr) {
  arr = arr.sort();

  let min = arr[0];
  let max = arr[1];
  let multiple = max;

  for(let i = max; i >= min; i -= 1) {

    if(multiple % i !== 0) {
      multiple += max;
      i = max;
    }
  }

  return multiple;
}

smallestCommons([1, 5]) // a number.
smallestCommons([1, 5]) // 60.
smallestCommons([5, 1]) // 60.
smallestCommons([1, 13]) // 360360.
smallestCommons([23, 18]) // 6056820.
