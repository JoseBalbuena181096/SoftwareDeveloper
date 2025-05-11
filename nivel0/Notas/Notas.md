### ¿Qué es javascript?

JavaScript es un lenguaje de programación que se ejecuta en el navegador y que permite crear interactividad en las páginas web.

### ¿Qué es un lenguaje de programación?

Un lenguaje de programación es un conjunto de reglas que permiten al programador escribir instrucciones que el ordenador puede entender y ejecutar.

### ¿Qué es un ordenador?

Un ordenador es una máquina que puede procesar información.

### ¿Qué es información?

La información es cualquier dato que tenga sentido para el ordenador.

### ¿Qué es un dato?

Un dato es cualquier valor que tenga sentido para el ordenador.

### ¿Que es un interprete?
Un interprete o un compilador (dependiendo del caso)  es un programa capaz de analizar y ejecutar código escrito en un lenguaje de programación.

![alt text](image.png)

El interprete  de JavaScript para computadora es Node.js

Para instalar Node.js desde el sitio web oficial de Node.js.

https://nodejs.org/es y presionar en Descargar Node.js(LTS)

![alt text](image-1.png)

### La línea de comandos

La línea de comandos es una herramienta que permite al usuario interactuar con el ordenador a través de comandos.

Hay dos tipos de lineas de comandos:

1. Para navegar en las carpetas y archivos del ordenador
2. Para ejecutar aplicaciones

Las acciones que realizo para interactuar con la computadora es muy comun trabajar con  la terminal, para ejecutar programas, bajar programas, interactuar con elementos del sistema operativo.

La terminal es una herramienta que nos muestra un linea de comandas, para basicamete chatear con nuestro computador, las cascaras que mas nos permiten interactuar con el sistema operativo son:

1. BASH(Bourne Again SHell)
    Es el shell predeterminado de la mayoria de las distros de linux y macos. Es conocida por su robustez y amplio uso en script.
2. FISH(Friendly Interactive Shell):
    Se sentra en la facilidad de uso y la interactividad. Ofrece caracteristicas como autocompletado, coloracion sintactica y sugerencias de comandos. Sin configuracion adicional.   

3. ZSH(Z Shell):
    Es un shell extensible que incorpora muchas de las caracteristicas de Bash, ksh, tcsh, ademas de añadir las propias. Es altamte configurable y populr por sus funciones de autocompletado, correcion ortografica de comandos, y personalizacion del prompt. Los frameworks como "Oh My Zsh" facilita la configuracion y la adición de plugins y temas.

### Un SHELL

Es un programa que actúa como una interfaz entre el usuario y el sistema operativo. Te permite interactuar con el sistema operativo mediante la introducción de comandos de texo, El shell interpreta estos comandos y le dice al sistema operativo qué acciones realizar.

Pienzalo como un traductor o un intermediario: tú le das instrucciones en lenguaje que el shell entiende (comandos) , y el shell traduce esas intruccione a un lenguaje que el nucleo (el kernel) del sistema operativo puede entender y ejecutar. 
![alt text](image-2.png)

En este chat tenemos dos partes:

1. El usuario (el user con el accediste)
2. En donde estas (el directorio actual que estas)
![alt text](image-3.png)

Simpre estamos situados en un directorio, que es una carpeta en el ordenador.

El sistema operativo tiene otras carpetas estandares donde se situan ciertos archivos y carpetas.
![alt text](image-4.png)

Los comandos clasicos que vienen con el sistema operativo:

-   PWD: Print Working Directory
    Muestra el directorio actual
![alt text](image-5.png)

-   CD: Change Directory
    Cambia de directorio
![alt text](image-6.png)

-   LS: List
    Lista los archivos y carpetas del directorio actual
![alt text](image-7.png)

-   MKDIR: Make Directory
    Crea una carpeta
![alt text](image-8.png)


-   RM: Remove
    Elimina un archivo o carpeta
![alt text](image-9.png)


Se puede abrir un archivo con una aplicacion especifica como un archivo de js con visual studio code.

![alt text](image-10.png)

### La terminal
Cuando escribimos un comando en la terminal estamos escribiendo código. Ese código es interpretado por la terminal para hablar con el sistema operativo y pedirle cosas como crear una carpeta, mostrar una lista de archivos o ejecutar una aplicación.

![alt text](image-11.png)

### Bash
Lo más común es que la terminal que usemos use bash como lenguaje. Especialmente en sistemas UNIX como Linux y macOS.

Vamos a ir aprendiendo lo necesario de Bash a medida que usemos la terminal a diario.

´´´bash
ls -la   # Este comando Bash muestra una lista de todos los archivos en la carpeta donde nos encontremos
´´´	

Por esto, todos sabemos algo de bash.

### Windows
Viene de fábrica dos tipos de terminales: PowerShell y CMD, también conocido como Símbolo del sistema.
![alt text](image-12.png)

En ninguna de estas terminales podemos escribir comandos bash, que son necesarios para poder trabajar con normalidad.

Por eso, para poder ejecutar comandos bash en Windows, necesitamos instalar una herramienta adicional como Git Bash.

### Git Bash
![alt text](image-13.png)

Git Bash emula una terminal bash dentro Windows. Esto nos permite usar herramientas de desarrollo que están diseñadas para ejecutarse en bash (que son muchas) y convenientemente nos va a servir en el futuro cercano cuando usemos Git, ya que Git está diseñado para trabajar en un entorno UNIX, que es lo que emula Git Bash.


### Desafio HOLA TERMINAL
Si estás usando Windows instalá Git Bash.

Si estás usando Linux o Mac buscá la aplicación llamada: Terminal.

Una vez que tengas la terminal abierta ejecutá el siguiente comando para verificar que Node.js esté instalado.

´´´ bash
node --version
´´´
![alt text](image-14.png)

### Comandos básicos  de la terminal
Usamos la terminal porque:

- Es la forma más eficiente, segura y sencilla (aunque todavía no lo creas) para comunicarnos con el sistema operativo.
- Para nuestro trabajo, es lento e incómodo usar la interfaz gráfica.
- Los servidores no tienen salida gráfica, entonces, la terminal es la única forma de acceder a ellos.
- Con la terminal tenemos un manejo más preciso de los datos que estamos manipulando.

#### Los más usados
A continuación, una lista de los comandos que vamos a usar frecuentemente en la terminal. No es necesario que los aprendas de memoria ya que los vamos a ir incorporando a medida que los usemos.

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

Abrir todos los archivos donde estoy parado con el comando "code ."
![alt text](image-22.png)

Limpiar la terminal con el comando "clear"
![alt text](image-23.png)

Salir de la terminal con el comando "exit"

### Desafio Carpeta "código"
En este ejercicio te proponemos explorar tu computadora y practicar algunos de los comandos básicos de la terminal.

Utiliza los comandos pwd, cd y ls para navegar las carpeta de tu computadora.

Cuando encuentres un buen lugar, utiliza el comando mkdir para crear una carpeta llamada source (o src) donde guardaremos nuestro código fuente (source code).
![alt text](image-24.png)
![alt text](image-25.png)