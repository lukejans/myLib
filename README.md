<div align="center">

<pre>
         .--.          
     .---|--|   .-.    
  .--|===|  |---|_|--. 
  |  |   |  |===| |~~| 
  |  |   |  |===| |==| 
  |  |   |  |   |_|__| 
  |  |===|--|===| |~~| 
  ^--^---'--^---^-^--^ 
  welcome to  __   _ __  
  __ _  __ __/ /  (_) /  
 /  ' \/ // / /__/ / _ \ 
/_/_/_/_,  /____/_/_.__/ 
      /___/              
</pre>

</div>

> console based book & note tracker

## Features
- ISBN scanner
- add books via ISBN (openLibrary or Google Books API)
- option to add a custom entry
- make notes on books being read

## Book Objects Construction
the user can add a book via ISBN to their library and it will automatically fill data for the book object. If the user chooses to add a custom entry they will have to manually fill all the book data during object creation and can also edit it later.

- class constructor() \*public create

### property fields

- title {String} [set upon object creation]
- author {String} [set upon object creation]
- number of pages {Number} [set upon object creation]
- current page {Number}
- time to read (TTR): {Object}
  - value {Number}
  - startDate {String}
  - endDate {String}
- notes {Object}

### property methods

- getTTR() \*private
  - used in
  - if TTR.value is set return it
  - else if TTR.value is undefined, the user has not finished the book therefore endDate must also be undefined. All books are given a TTR.startDate upon creation so create a new Date object to compare startDate to curDate and return time to read
- setTTR() \*private
  - used in finishBook() method
  - set endDate to a new Date object
- get checkReadTime() \*public
- set finishBook() \*public

