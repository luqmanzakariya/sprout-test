// (1) Name Validator (Logic Test)

/*
  Definitions:
  1. A term is either an initials or word.
  2. initials = 1 character
  3. words = 2+ characters (no dots allowed)

  A “valid name” is a name written in one of the following ways:
  * A. Kesya
  * A. K. Putri
  * Angelina K. Putri
  * Angelina Kesya Putri

  The following names are “invalid”:
  * Angelina or Kesya (single names not allowed)
  * A Kesya or A. K Putri (initials must end with dot)
  * a. Kesya or A. kesya or a. k. Putri (incorrect capitalization)
  * A. Kesya Putri (middle name expanded, while first still left as initial)
  * A. K. P. (last name is not a word)
  * Angelina. K. Putri (dot only allowed after initial, not word)
  
  Rules
  1. Both initials and words must be capitalized.
  2. Initials must end with a dot.
  3. A name must be either 2 or 3 terms long.
  4. If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
  5. The last name must be a word (not an initial).
  Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.
  
  Examples:
  validName(“A. Kesya”) ➞ true
  validName(“A. K. Putri) ➞ true
  validName(“Angelina K. Putri”) ➞ true
  validName(“Angelina”) ➞ false
  // Must be 2 or 3 words
  
  validName(“a. Kesya”) ➞ false
  // Incorrect capitalization
  
  validName(“A Kesya”) ➞ false
  // Missing dot after initial
  
  validName(“A. Kesya Putri”) ➞ false
  // Cannot have: initial first name + word middle name
  
  validName(“A. Kesya P.”) ➞ false
  // Last name cannot be initial
  
  validName(“Angelina. Kesya Putri”) ➞ false
  // Words cannot end with a dot (only initials can)
*/
 
const validName = (str) => {
  let words = str.split(" ")

  // # Rules: A name must be either 2 or 3 terms long.
  if (words.length < 2){
    return false
  }

  for (let i=0; i<words.length; i++){
    if (words[i].length <= 2){
      // # Rules: Both initials and words must be capitalized.
      if (words[i][0] !== words[i][0].toUpperCase()){
        return false
      }
      // # Rules: Initials must end with a dot
      if (!words[i].endsWith('.')){
        return false
      }
    } else {
      // # Rules: Both initials and words must be capitalized.
      if (words[i][0] !== words[i][0].toUpperCase()){
        return false // Incorrect capitalization
      }
      // # Rules: Words cannot end with a dot
      if (words[i].endsWith('.')){
        return false
      }
    }
  }

  // # Rules: If the name is 3 words long, you can expand the first and middle name or expand the first name only. 
  //          You cannot keep the first name as an initial and expand the middle name only.
  if (words.length === 3){
    if (words[0].length <= 2 && words[1].length > 2){
      return false
    }
  }

  // # Rules: The last name must be a word (not an initial), (no dots allowed)
  if (words[words.length - 1].length < 2){
    return false
  }
  if (words[words.length - 1].includes(".")){
    return false
  }

  return true
}

// Test Case
console.log("== test case using Examples ==")
console.log(validName("A. Kesya")) // ➞ true
console.log(validName("A. K. Putri")) // ➞ true
console.log(validName("Angelina K. Putri")) // ➞ true
console.log(validName("Angelina")) // ➞ false, Must be 2 or 3 words
console.log(validName("a. Kesya")) // ➞ false, Incorrect capitalization
console.log(validName("A Kesya")) // ➞ false, // Missing dot after initial
console.log(validName("A. Kesya Putri")) // ➞ false, Cannot have: initial first name + word middle name
console.log(validName("A. Kesya P.")) // ➞ false, Last name cannot be initial
console.log(validName("Angelina. Kesya Putri")) // ➞ false, Words cannot end with a dot (only initials can)

// Test Case True from Question
console.log("== test case true from question description ==")
console.log(validName("A. Kesya"))
console.log(validName("A. K. Putri"))
console.log(validName("Angelina K. Putri"))
console.log(validName("Angelina Kesya Putri"))

// Test Case False from Question
console.log("== test case false from question description ==")
console.log(validName("Angelina")) // (single names not allowed)
console.log(validName("Kesya")) // (single names not allowed)
console.log(validName("A Kesya")) // (initials must end with dot)
console.log(validName("K Putri")) // (initials must end with dot)
console.log(validName("a. Kesya")) // (incorrect capitalization)
console.log(validName("A. kesya")) // (incorrect capitalization)
console.log(validName("k. Putri")) // (incorrect capitalization)
console.log(validName("A. Kesya Putri")) // (middle name expanded, while first still left as initial)
console.log(validName("A. K. P.")) // (last name is not a word)
console.log(validName("Angelina. K. Putri")) // (dot only allowed after initial, not word)