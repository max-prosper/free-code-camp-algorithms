// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments);
	var left = args.unshift(args[0]);

	return arr.filter(x => !args.includes(x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1].
destroyer([2, 3, 2, 3], 2, 3); // [].
destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"].
