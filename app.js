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

// type writer effect
const title = document.getElementById('title');
let phrase = 'myHome';
let currentPhrase = [];
let i = 0;
function typeWriter() {
  title.innerHTML = currentPhrase.join('');
  if (i < phrase.length) {
    currentPhrase.push(phrase[i]);
    i++;
    setTimeout(typeWriter, 200);
  } else {
    i = 0;
    currentPhrase = [];
  }
}
typeWriter();

// show on home page
const PROFILE = document.querySelector('.header-home');
const NAV = document.querySelector('.navigation');
const STATS = document.querySelector('.myStats');
// show on cache page
const MY_CACHE = document.querySelector('.cache');
const HOME_BTN = document.querySelector('.back');
// show form for adding book
const ADD_BTN = document.querySelector('.add-items');
const BOOK_FORM = document.querySelector('.form-input');
// nav button
const NAV_BTN = document.querySelector('.switch-page');
// no items
const NO_ITEMS = document.querySelector('.no-items');
const NOTICE = document.querySelector('.notice');

// CACHE PAGE
NAV_BTN.addEventListener('click', () => {
  // change title
  phrase = 'myCache';
  typeWriter();
  // remove home page sections
  NAV.classList.add('home-off');
  PROFILE.classList.add('home-off');
  STATS.classList.add('home-off');
  // add cache page sections
  HOME_BTN.classList.remove('cache-off');
  MY_CACHE.classList.remove('cache-off');
  reSize();
});
// add/remove spacing when books are added/removed
function reSize() {
  if (library.length === 0) {
    NO_ITEMS.style.padding = '0';
    NOTICE.classList.remove('cache-off');
  } else {
    NO_ITEMS.style.padding = '28px 14px';
    NOTICE.classList.add('cache-off');
  }
}
// HOME PAGE
HOME_BTN.addEventListener('click', () => {
  // change title
  phrase = 'myHome';
  typeWriter();
  // add home page sections
  NAV.classList.remove('home-off');
  PROFILE.classList.remove('home-off');
  STATS.classList.remove('home-off');
  // remove cache page sections
  HOME_BTN.classList.add('cache-off');
  MY_CACHE.classList.add('cache-off');
  // remove form if visible
  BOOK_FORM.classList.toggle('form-off');
});
// FORM MODEL
ADD_BTN.addEventListener('click', () => {
  // add form sections
  BOOK_FORM.classList.remove('form-off');
  // remove cache page sections
  MY_CACHE.classList.add('cache-off');
  reSize();
});
// book storage
let library = [];

// create a constructor function for object creation
const Book = function (title, author, pages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = isRead);
  this.uniqueId = library.length;
};
// shared function on prototype
Book.prototype.info = function () {
  return this;
};

// create a function to store user book input in library
function addToLibrary(book) {
  return library.push(book);
}

// ellipse text
const books = document.querySelectorAll('.book');

books.forEach((book) => {
  const text = book.textContent;

  if (text.length > 90) {
    book.textContent = text.substring(0, 90) + '...';
  }
});

const BOOKS_SECTION = NO_ITEMS;

function displayBooks() {
  BOOKS_SECTION.innerHTML = '';

  for (let i = 0; i < library.length; i++) {
    const display = document.createElement('div');
    display.textContent = library[i].title;
    display.className = 'book';
    BOOKS_SECTION.appendChild(display);
  }
}

BOOK_FORM.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  // Get user input from form fields
  const ftitle = document.querySelector('#ftitle').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const isRead = document.querySelector('#isRead').value;

  // Create new Book object with user input
  const newBook = new Book(ftitle, author, pages, isRead);

  // Add new book to library
  addToLibrary(newBook);

  // Clear form fields
  BOOK_FORM.reset();
  BOOK_FORM.classList.add('form-off');
  HOME_BTN.classList.remove('cache-off');
  MY_CACHE.classList.remove('cache-off');

  displayBooks();
  reSize();
}

// Select Button
const SELECT_BTN = document.querySelector('.select');
let isSelecting = false;

SELECT_BTN.addEventListener('click', () => {
  isSelecting = !isSelecting;
  if (isSelecting) {
    startPermutationAnimation('permutable2');
  } else {
    stopPermutationAnimation('Select', 'permutable2');
  }
});

document.addEventListener('click', (event) => {
  if (isSelecting && event.target.classList.contains('book')) {
    event.target.classList.toggle('selected');
  } else {
    document.querySelectorAll('.selected').forEach((elem) => {
      elem.classList.remove('selected');
    });
  }
});

// delete button
const DELETE_BTN = document.querySelector('#delete');
DELETE_BTN.addEventListener('click', () => {
  const selectedElems = document.querySelectorAll('.selected');
  selectedElems.forEach((elem) => {
    const title = elem.textContent;
    // remove selected book from DOM
    elem.remove();
    // remove selected book from library array
    for (let i = 0; i < library.length; i++) {
      if (library[i].title === title) {
        library.splice(i, 1);
        break;
      }
    }
  });
  reSize();
});
