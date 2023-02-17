// book storage
let library = [];

// create a constructor function for object creation
const Book = function (title, author, pages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = isRead);
};
// shared function on prototype
Book.prototype.info = function () {
  return this;
};

// example using the constructor
const book1 = new Book('Eloquent JavaScript', 'Haverbeke', 472, false);
const book2 = new Book('JavaScript: The Good Parts', 'Crockford', 176, true);
const book3 = new Book('Clean Code', 'C. Martin', 464, true);

// create a function to store user book input in library
function addToLibrary(book) {
  return library.push(book);
}

/* HOVER ANIMATION
  next lexicographically permuted string of the original word
*/
let currentWord = '';
let output = '';
function generateNextPermutation(word) {
  let index = 0;
  let hasCarry = 0;
  let permutationAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  /* convert word to lowercase and then to an array 
    of numbers representing the character codes */
  word = word.toLowerCase();
  let chars = [];
  for (index = 0; index < word.length; index++) {
    chars[index] = word.charCodeAt(index) - 97;
  }
  // generate next permutation of character codes
  if (chars[chars.length - 1] < 25) {
    chars[chars.length - 1]++;
  } else {
    chars[chars.length - 1] = 0;
    for (index = chars.length - 2; index > -1; index--) {
      if (chars[index] < 25) {
        chars[index]++;
        hasCarry++;
        break;
      } else {
        chars[index] = 0;
      }
    }
    if (hasCarry == 0) {
      chars.unshift(0);
    }
  }
  // convert array of character codes back to a string

  output = permutationAlphabet[chars[0]].toUpperCase();
  for (index = 1; index < chars.length; index++) {
    output = output + permutationAlphabet[chars[index]];
  }
  return output;
}
function startPermutationAnimation(curr) {
  let word1 = document.getElementById(curr).innerHTML;
  currentWord = setInterval(function () {
    document.getElementById(curr).innerHTML = generateNextPermutation(word1);
    word1 = output;
  }, 1);
}
function stopPermutationAnimation(term, curr) {
  clearInterval(currentWord);
  document.getElementById(curr).innerHTML = term;
}
