function printBookInfo(book) {
  console.log("Title: ".concat(book.title));
  console.log("Author: ".concat(book.author));
  console.log("Pages: ".concat(book.pages));
  console.log("ISBN: ".concat(book.isbn));
}
// Crea aquí el objeto que cumpla con la interfaz Book
var book = {
  // Completa aquí los valores de las propiedades
  title: "El principito",
  author: "Antoine de Saint-Exupéry",
  pages: 223,
  isbn: "1234567890",
};
printBookInfo(book);
