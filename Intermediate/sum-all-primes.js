// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//
// The provided number may not be a prime.

function sumPrimes(num) {
	function isPrime(num) {
		for (let i = 2; i <= Math.sqrt(num); i += 1)
			if (num % i === 0) {
				return false;
			}
		return num !== 1;
	}

	let arr = [];
	for (let i = 1; i <= num; i++) {
		if (isPrime(i)) {
			arr.push(i);
		}
	}
	return arr.reduce((a, b) => a + b, 0);
}

sumPrimes(10) // a number.
sumPrimes(10) // 17.
sumPrimes(977) // 73156.
