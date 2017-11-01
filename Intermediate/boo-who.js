// Check if a value is classified as a boolean primitive. Return true or false.
//
// Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(true); // true.
booWho(false); // true.
booWho([1, 2, 3]); // false.
booWho([].slice); // false.
booWho({ "a": 1 }); // false.
