// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	for (var i = 0; i < str.length - 1; i += 1) {
		if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
			return String.fromCharCode(str.charCodeAt(i) + 1);
		}
	}
	return undefined;
}

fearNotLetter('abce'); // "d".
fearNotLetter('abcdefghjklmno'); // "i".
fearNotLetter('bcd'); // undefined.
fearNotLetter('yz'); // undefined.
