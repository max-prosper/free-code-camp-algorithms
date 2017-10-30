// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
	var newStr = str[0].toUpperCase();

	for (var i = 1; i < str.length; i += 1) {
		if (str[i - 1] === ' ') {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i].toLowerCase();
		}
	}

	return newStr;
}

titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot".
titleCase('sHoRt AnD sToUt'); // "Short And Stout".
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'); // "Here Is My Handle Here Is My Spout".
