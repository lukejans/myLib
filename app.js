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
let ewig = '';
let holder = '';
function permuter(word) {
  let ind = 0;
  let gate = 0;
  let permuda = [
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
  word = word.toLowerCase();
  let polygon = [];
  for (ind = 0; ind < word.length; ind++) {
    polygon[ind] = word.charCodeAt(ind) - 97;
  }
  if (polygon[polygon.length - 1] < 25) {
    polygon[polygon.length - 1]++;
  } else {
    polygon[polygon.length - 1] = 0;
    for (ind = polygon.length - 2; ind > -1; ind--) {
      if (polygon[ind] < 25) {
        polygon[ind]++;
        gate++;
        break;
      } else {
        polygon[ind] = 0;
      }
    }
    if (gate == 0) {
      polygon.unshift(0);
    }
  }
  holder = permuda[polygon[0]].toUpperCase();
  for (ind = 1; ind < polygon.length; ind++) {
    holder = holder + permuda[polygon[ind]];
  }
  return holder;
}
function permute(curr) {
  let word1 = document.getElementById(curr).innerHTML;
  ewig = setInterval(function () {
    document.getElementById(curr).innerHTML = permuter(word1);
    word1 = holder;
  }, 1);
}
function unpermute(term, curr) {
  clearInterval(ewig);
  document.getElementById(curr).innerHTML = term;
}

{
  /* <span
      id="permutable1"
      onmouseover="permute('permutable1')"
      onmouseleave="unpermute('Browse','permutable1')"
      onclick="unpermute('Browse','permutable1')"
      >Browse</span
    > */
}
