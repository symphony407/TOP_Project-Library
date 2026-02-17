const myLibrary =  [];
const container = document.getElementById("library");

class Book {
constructor(title, author,amountOfPages){
this.title = title;
this.author = author;
this.amountOfPages = amountOfPages;
    } 
toggleRead() {
    this.read = !this.read;

}
}

function addBookToLibrary(title, author, amountOfPages, _read) {
    const newBook = new Book(title, author, amountOfPages);
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
        card.appendChild(titleElement);
        container.append(card);
    });
}


console.log(myLibrary);
myLibrary[0].toggleRead();
console.log(myLibrary);