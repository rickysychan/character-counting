// // Write a function countLetters that can return to us all
// the unique characters that exist in a string that is passed into
// the function.


function countLetters(sentence){
  const splitWords = sentence.split(' ').join('');
  const splitLetters = splitWords.split('');
  let letters = {};

  for(let i = 0; i < splitLetters.length; i++){
    const char = splitLetters[i];

    /* loops through the length of SplitLetters and
       stores them onto char
    */
    if (letters[char] === undefined){
      letters[char] = 1;
      /*
      this adds char the object letters as keys
      checks to see the characters are undefined because it has
      not occured before. it is undefined because it was not added as a key.
       if it is undefined the value is set to 1

      */
    } else {
      letters[char] += 1;
/* if it is defined add one to offset the counter which starts at undefined
*/
    }
  }


  return letters;
}

console.log(countLetters("lighthouse in the house"));


// // Furthermore, the function should also report back how
// many instances of each letter were found in the string.

// // Functions can only return one thing. That thing can
//  (as we've seen) be a primitive data type, like a number, a boolean,
//   null or a string.

// // However, our function countLetters needs to return an object
// that can represent the stats for the sentence it is given: all the
// characters found in the input string, and their respective counts.
// Note that we are skipping and not counting spaces.