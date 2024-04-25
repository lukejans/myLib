/********************
*    myLib Index    *
********************/

// import helper functions
import { calcTimeDiff } from './helper.js';


const myLib = {
  // library where all books will be automatically added to upon creation 
  // using their title as a key and the associated object as the value.
  
  // ---------------------- example
  // "book title": { Book: object }
}

// book objects are created using class syntax 
class Book {
  constructor(title, author, numOfPages, curPage) {
    // set book properties
    this.title = title || "";
    this.author = author || "";
    this.numOfPages = numOfPages || 0;
    this.curPage = curPage || 0;
    this.startDate = new Date();
    this.finishDate = null;
    this.readTime = "";
    this.notes = {};

    // add book to library 
    myLib[title] = this
  }

  finishBook() {
    if (!this.finishDate) {
      this.finishDate = new Date();
      this.readTime = calcTimeDiff(this.startDate, this.finishDate);
      return `Congratulations! you finished ${this.title} ins ${this.readTime}`;
    } else {
      return `Book already finished! ${this.readTime} spent reading: ${this.title}`;
    }
  }

  getReadTime() {
    if (!this.readTime) {
      let curTime = calcTimeDiff(this.startDate, new Date());
      return `Still reading ${this.title} for ${curTime}`;
    } else {
      return `You've read ${this.title} for ${this.readTime}`;
    }
  }
}



/********************
*       Debug       *
********************/

const testBook = new Book("TEST_BOOK", "LJ", 20, 10); // -------------------------- debug

// attach library to window object so users can access from dev tools
window.myLib = myLib;
