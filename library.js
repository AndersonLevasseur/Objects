class Library {
    constructor(_address) {
        this.books = [];
        this.address = _address;
        this.booksCheckedOut = [];
    }
    add(title) {
        this.books.push(title);
    }
    remove(title) {
        let bookIndex = this.books.indexOf(title); 
        this.books.splice(bookIndex, 1);
    }
    checkin(title) {
        let bookIndex = this.booksCheckedOut.indexOf(title);
        this.booksCheckedOut.splice(bookIndex, 1);
    }
    checkout(title) {
        this.booksCheckedOut.push(title);
    }
    getAddress() {
        return this.address;
    }
    getBooks(showOnlyCheckedOut) {
        if (showOnlyCheckedOut) {
            return this.booksCheckedOut;
        } else {
            return this.books;
        }
    }
}
module.exports = Library;