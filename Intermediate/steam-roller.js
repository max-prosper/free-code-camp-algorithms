// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
	return arr.reduce(function(a, b) {
		if (Array.isArray(b)) {
			return a.concat(steamrollArray(b));
		}
		return a.concat(b);
	}, []);
}

steamrollArray([[['a']], [['b']]]); // ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4].
