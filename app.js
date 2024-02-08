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
Book.prototype.readUnread = function () {
  this.isRead = !this.isRead;
  return this;
};

// create a function to store user book input in library
function addToLibrary(book) {
  return library.push(book);
}

function addBookToLibrary(event) {
  event.preventDefault(); // prevent the form from submitting and reloading the page

  // Create new Book object with user input
  const newBook = new Book(ftitle, author, pages, isRead);

  // Add new book to library
  addToLibrary(newBook);

  displayBooks();
  reSize();
}
