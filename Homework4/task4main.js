class Library {
    #name;
    #books = [];

    constructor(name) {
        this.#name = name;
    }

    addBook(bookName) {
        this.#books.push(bookName);
        console.log(`Book ${bookName} added to ${this.#name}`);
    }

    removeBook(bookName) {
        const bookIndex = this.#books.indexOf(bookName);
        if (bookIndex >= 0) {
            this.#books.splice(bookIndex, 1);
            console.log(`Book ${bookName} removed from ${this.#name}`);
        }
        else {
            console.log(`Book ${bookName} does not exist in ${this.#name}`);
        }
    }

    displayBooks() {
        console.log(`Books in ${this.#name}`);

        if (this.#books.length > 0) {
            this.#books.forEach((book) => {
                console.log(`${this.#books.indexOf(book) + 1}. ${book}`);
            });
        }
        else {
            console.log("No books available.");
        }
    }
}

const library = new Library("JS library");
library.displayBooks();

console.log(`\n`);
library.addBook("Javascript: The Definitive Guide - David Flanagan");
library.addBook("You don`t know JS - Kyle Simpson");
library.addBook("Eloquent JavaScript, 4th Edition - Marijn Haverbeke");
library.displayBooks();

console.log(`\n`);
library.removeBook("Javascript: The Definitive Guide - David Flanagan");
library.removeBook("Javascript: The Definitive Guide");

console.log(`\n`);
library.displayBooks();
