const Library = require("./library");
let library = new Library("123 Main ST.");

library.add('Wizard Of Oz');
library.add('Moby Dick');
library.add('1776');
console.log(library.getBooks(true));

library.checkout('1776');
console.log(library.getBooks(true));