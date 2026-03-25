const myLibrary =  [];
const container = document.getElementById("library");

const form = document.getElementById("book-form");

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


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const amountOfPages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, amountOfPages, read);

    form.reset();
});



function displayBooks() {
  container.innerHTML = "";

  myLibrary.forEach((book, index) => {
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
    readElement.textContent = "Read: " + (book.read ? "Yes" : "No");
    card.append(readElement);

    // Toggle button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = book.read
      ? "Mark as Unread"
      : "Mark as Read";

    toggleButton.addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    card.append(toggleButton, deleteButton);
    container.append(card);
  });
}
