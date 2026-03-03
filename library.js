const myLibrary =  [];
const container = document.getElementById("library");

class Book {
constructor(title, author,amountOfPages, _read) {
this.title = title;
this.author = author;
this.amountOfPages = amountOfPages;
    } 
toggleRead() {
    this.read = !this.read;

}
}

function addBookToLibrary(title, author, amountOfPages, _read) {
    const newBook = new Book(title, author, amountOfPages, _read);
    myLibrary.push(newBook);
    displayBooks();
}

addBookToLibrary("Moby Dick" , "Herman Melville" , 300, false);

function displayBooks() {
    container.textContent = "";
    myLibrary.forEach(function(book) {
        const card = document.createElement("div");
        const titleElement = document.createElement("span");
        titleElement.textContent = book.title;
        card.append(titleElement);
        const authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + book.author;
        card.append(authorElement);
        const pagesElement = document.createElement("p");
        pagesElement.textContent = "Pages: " + book.amountOfPages;
        card.append(pagesElement);
        const readElement = document.createElement("p");
        let status = book.read ? "Yes" : "No";
        readElement.textContent = "Read: " + status;
        card.append(readElement);
       container.append(card);

        const toggleButton = document.createElement("button")
        let buttonText = book.read ? "Mark as Unread" : "Mark as Read";
        toggleButton.textContent = buttonText;
        card.append(toggleaButton);
        
    });
}


console.log(myLibrary);
myLibrary[0].toggleRead();
console.log(myLibrary);