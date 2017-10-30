// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
	var newString = str
		.split('')
		.reverse()
		.join('');

	return newString;
}

reverseString('hello'); //"olleh"
reverseString('Howdy'); // "ydwoH".
reverseString('Greetings from Earth'); //"htraE morf sgniteerG".
