var Libro = /** @class */ (function () {
    function Libro(titulo, autor, añoPublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
        // [Tu código para inicializar las otras propiedades]
    }
    Libro.prototype.getAntiguedad = function () {
        var añoActual = new Date().getFullYear();
        // [Tu código para devolver la antiguedad basada en la propiedad this.añoPublicacion]
        return añoActual - this.añoPublicacion;
    };
    return Libro;
}());
// Creando instancias de la clase Libro
var libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
// [Tu código para el segundo libro]
var libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943);
// Usando el método getAntiguedad y mostrando detalles de los libros
console.log("El libro \"".concat(libro1.titulo, "\" de ").concat(libro1.autor, ", publicado en ").concat(libro1.añoPublicacion, ", tiene ").concat(libro1.getAntiguedad(), " a\u00F1os de antig\u00FCedad."));
// [Tu código para imprimir los datos del segundo libro]
console.log("El libro \"".concat(libro2.titulo, "\" de ").concat(libro2.autor, ", publicado en ").concat(libro2.añoPublicacion, ", tiene ").concat(libro2.getAntiguedad(), " a\u00F1os de antig\u00FCedad."));
