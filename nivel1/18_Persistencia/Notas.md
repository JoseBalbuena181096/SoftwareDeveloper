## Datos permanentes

Los programas reciben información en forma de inputs proporcionados por los usuarios u obtenidos de otros programas. Los procesan y devuelven outputs, que son los resultados o datos de salida. Como ya hemos visto, este es el flujo habitual de los datos dentro del software.

Hasta ahora, hemos visto que los datos se almacenan en la memoria RAM en forma de variables. Pero los datos almacenados en la RAM son temporales, ya que se trata de un lugar de trabajo transitorio, y la información se pierde cuando se cierra un programa o se apaga una computadora.

Si queremos que ciertos datos persistan en el tiempo, tenemos que almacenarlos en el disco duro. Por ejemplo, cuando cerramos el navegador Chrome y, al abrirlo nuevamente, aparecen las pestañas que estaban abiertas, es probable que esa información se haya guardado en el disco duro o en un servidor en la nube.

Por el momento, vamos a aprender a leer datos que han sido guardados de forma permanente. Eventualmente, aprenderemos a crearlos y almacenarlos. Aunque la idea es usar estas herramientas para interactuar con bases de datos, comenzaremos trabajando con archivos pequeños.

Para leer archivos, usaremos el módulo fs de la librería estándar de Node.js, tal como lo vimos en el video anterior. Dentro de estos archivos, los datos estarán escritos en formato JSON.

## JSON

JSON es un formato de intercambio de datos que se utiliza comúnmente en aplicaciones web y móviles. Las siglas JSON significan "JavaScript Object Notation" y se utiliza para transmitir datos estructurados en formato de texto plano.

El formato JSON utiliza una sintaxis muy similar a la de los objetos JavaScript, lo que lo hace fácilmente legible por los humanos. Consiste en pares clave-valor, donde las claves se escriben entre comillas dobles y separadas de sus valores por dos puntos. Los valores pueden ser cadenas de texto, números, booleanos, objetos o arrays.

```json
{
  "nombre": "Juan",
  "edad": 25,
  "activo": true,
  "amigos": ["Ana", "Pedro", "María"]
}
```

En este ejemplo, el objeto tiene cuatro pares clave-valor, donde "nombre", "edad" y "activo" son claves y "Juan", 25 y "true" son sus respectivos valores. La clave (key) "amigos" tiene un array como valor.

Es importante tener cuidado al trabajar con JSON ya que cualquier error de sintaxis puede hacer que los datos no se puedan leer o procesar correctamente. Es importante seguir las reglas de sintaxis de JSON y asegurarse de que los datos estén formateados correctamente. Además, hay que tener en cuenta que el formato JSON no es adecuado para almacenar grandes cantidades de datos y que puede ser vulnerable a ataques de seguridad si no se utiliza correctamente.
