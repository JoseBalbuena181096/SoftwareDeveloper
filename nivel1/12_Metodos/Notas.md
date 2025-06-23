# Métodos

Los métodos en JavaScript son funciones que pertenecen a un objeto o a un valor primitivo y permiten realizar acciones sobre ellos. Se llaman usando un punto después del objeto o valor. Por ejemplo, el método toUpperCase() se puede usar en un string para convertir todas sus letras a mayúsculas.

```javascript
let miString = "hola mundo";
let miStringEnMayusculas = miString.toUpperCase();
console.log(miStringEnMayusculas); // "HOLA MUNDO"
```

En primitivos
Algunos primitivos como los strings, números y booleanos tienen métodos. Estos métodos no cambian el valor original, sino que devuelven un nuevo valor con la modificación realizada.

Algunos métodos muy usados son:

- toUpperCase(): Convierte un string a mayúsculas.
- toLowerCase(): Convierte un string a minúsculas.
- toString(): Convierte un valor en su representación como string.
- toFixed(n): Convierte un número en un string con n decimales.
- parseInt(): Convierte un string en un número entero.

```javascript
let miString = "hola mundo";
let miStringMayusculas = miString.toUpperCase();
console.log(miStringMayusculas); // "HOLA MUNDO"

let miNumero = 3.1416;
let miNumeroRedondeado = miNumero.toFixed(2);
console.log(miNumeroRedondeado); // "3.14"

let miBoolean = true;
let miBooleanString = miBoolean.toString();
console.log(miBooleanString); // "true"
```

## En arrays

Los arrays en JavaScript tienen una gran cantidad de métodos que permiten manipular su contenido de diversas formas. Estos métodos pueden agregar o eliminar elementos del array, buscar elementos, realizar operaciones sobre ellos y mucho más.

Algunos métodos de arrays incluyen:

```javascript
let miArray = [1, 2, 3];
miArray.push(4);
console.log(miArray); // [1, 2, 3, 4]

let miOtroArray = ["hola", "mundo"];
let miNuevoArray = miOtroArray.slice(1);
console.log(miNuevoArray); // ["mundo"]

let miStringArray = ["hola", "mundo"];
let miStringUnido = miStringArray.join(" ");
console.log(miStringUnido); // "hola mundo"

let miIndice = miArray.indexOf(3);
console.log(miIndice); // 2
```

