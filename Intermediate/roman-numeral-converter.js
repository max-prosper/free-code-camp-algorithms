// Convert the given number into a roman numeral.

function convertToRoman(num) {
	var romanMatrix = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I']
	];

	if (num === 0) {
		return '';
	}
	for (var i = 0; i < romanMatrix.length; i += 1) {
		if (num >= romanMatrix[i][0]) {
			return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
		}
	}
}

convertToRoman(2); // "II".
convertToRoman(3); // "III".
convertToRoman(4); // "IV".
convertToRoman(5); // "V".
convertToRoman(9); // "IX".
convertToRoman(12); // "XII".
convertToRoman(16); // "XVI".
convertToRoman(29); // "XXIX".
convertToRoman(44); // "XLIV".
convertToRoman(45); // "XLV"
convertToRoman(68); // "LXVIII"
convertToRoman(83); // "LXXXIII"
convertToRoman(97); // "XCVII"
convertToRoman(99); // "XCIX"
convertToRoman(500); // "D"
convertToRoman(501); // "DI"
convertToRoman(649); // "DCXLIX"
convertToRoman(798); // "DCCXCVIII"
convertToRoman(891); // "DCCCXCI"
convertToRoman(1000); // "M"
convertToRoman(1004); // "MIV"
convertToRoman(1006); // "MVI"
convertToRoman(1023); // "MXXIII"
convertToRoman(2014); // "MMXIV"
convertToRoman(3999); // "MMMCMXCIX"
