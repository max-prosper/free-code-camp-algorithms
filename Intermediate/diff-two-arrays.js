// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
	newArr1 = arr1.filter(item => !arr2.includes(item));
	newArr2 = arr2.filter(item => !arr1.includes(item));

	return newArr1.concat(newArr2);
}

['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
	['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']; // ["pink wool"].
['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
	['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']; // ["diorite", "pink wool"].
['andesite', 'grass', 'dirt', 'dead shrub'],
	['andesite', 'grass', 'dirt', 'dead shrub']; // [].
[1, 2, 3, 5], [1, 2, 3, 4, 5]; // [4].
[1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]; // ["piglet", 4].
[], ['snuffleupagus', 'cookie monster', 'elmo']; // ["snuffleupagus", "cookie monster", "elmo"].
[1, 'calf', 3, 'piglet'], [7, 'filly']; // [1, "calf", 3, "piglet", 7, "filly"].
