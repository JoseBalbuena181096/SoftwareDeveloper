// objeto literal
// const unObjeto = {
//   unNumero: 1,
//   unaPalabra: "una palabra",
// };
var Pelicula = /** @class */ (function () {
    function Pelicula(title, rating) {
        this.title = title;
        this.rating = rating || 0;
    }
    Pelicula.prototype.getTitle = function () {
        return this.title;
    };
    Pelicula.prototype.toString = function () {
        return "Pelicula: ".concat(this.title, " - Rating: ").concat(this.rating);
    };
    return Pelicula;
}());
function main() {
    var unaPelicula = new Pelicula("El Padrino", 5);
    console.log(unaPelicula.toString());
    var unaPelicula2 = new Pelicula("El Padrino", 5);
    console.log(unaPelicula2.toString());
}
main();
