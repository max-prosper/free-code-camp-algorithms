// We'll pass you an array of two numbers. Return the sum of those two numbers and
// all numbers between them.
//
// The lowest number will not always come first.

function sumAll(arr) {
	var newSrr = arr[0] < arr[1] ? arr : [arr[1], arr[0]];
	var numb = 0;
	for (var i = newSrr[0]; i <= newSrr[1]; i += 1) {
		numb += i;
	}

	return numb;
}

sumAll([1, 4]); // a number.
sumAll([1, 4]); // 10.
sumAll([4, 1]); // 10.
sumAll([5, 10]); // 45.
sumAll([10, 5]); // 45.
