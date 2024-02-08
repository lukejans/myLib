class Book {
  constructor(title, author, numOfPages, curPage) {
    this.title = title || '';
    this.author = author || '';
    this.numOfPages = numOfPages || 0;
    this.curPage = curPage || 0;
    this.readTime = {
      value: '',
      startDate: new Date(),
      finishDate: {},
    };
    this.notes = {};
  }

  finishBook() {
    // description:
    //  - sets this.finishDate
    //  - sets this.readTime.value that changes its time format based on the length
    //    of reading time (days, hours, minutes)
    if (!this.readTime.value) {
      this.readTime.finishDate = new Date();
      let time =
        (this.readTime.finishDate - this.readTime.startDate) / 1000 / 60 / 60;
      let format = 'hours';
      if (time >= 24) {
        format = 'days';
        time /= 24;
      }
      this.readTime.value = `${time.toFixed(1)} ${format}`;
      console.log(
        `Congratulations! you finished ${this.title} in ${this.readTime.value}`
      );
    } else {
      console.log(
        `Book already finished! ${this.readTime.value} spent reading: ${this.title}`
      );
    }
  }
}
