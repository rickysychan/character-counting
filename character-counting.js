// // Write a function countLetters that can return to us all
// the unique characters that exist in a string that is passed into
// the function.
const letters = [];

function countLetters(sentence){
const splitWords = sentence.split(' ').join('');
const splitLetters = splitWords.split('');

return splitLetters;
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