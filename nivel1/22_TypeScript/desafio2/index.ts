interface Book {
  title: string;
  author: string;
  pages: number;
  isbn: string;
}

function printBookInfo(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`ISBN: ${book.isbn}`);
}

// Create a book object that implements the Book interface
const myBook: Book = {
  title: "El principito",
  author: "Antoine de Saint-Exupéry",
  pages: 223,
  isbn: "1234567890",
};

// Call the function with the book object
printBookInfo(myBook);
