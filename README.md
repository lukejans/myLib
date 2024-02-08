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

This project was built while completing curriculum from the odin project on the nodeJS path. In this project I learnt about constructor functions and prototypal inheritance and how JavaScripts `Class` syntax uses these language features.

## Book Objects Construction

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
