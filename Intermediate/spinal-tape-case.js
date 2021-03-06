// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(/\s+|_+/g, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap") // "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") // "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") // "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") // "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") // "all-the-small-things".
