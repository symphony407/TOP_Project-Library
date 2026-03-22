const myLibrary =  [];
const container = document.getElementById("library");

class Book {
constructor(title, author,amountOfPages, _read) {
this.title = title;
this.author = author;
this.amountOfPages = amountOfPages;
this.read = _read;
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

const form = document.getElementById("book-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const amountOfPages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, amountOfPages, read);
});



function displayBooks() {
    container.textContent = "";
    myLibrary.forEach(function(book) {
        const card = document.createElement("div");
        card.classList.add("book-card");

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
        toggleButton.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        })
        card.append(toggleButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            displayBooks();
        });
        card.append(deleteButton);

        container.append(card);
    });
}


console.log(myLibrary);
myLibrary[0].toggleRead();
console.log(myLibrary);