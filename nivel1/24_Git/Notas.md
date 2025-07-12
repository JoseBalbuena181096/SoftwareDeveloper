# Intro a git

Git es una herramienta de software de control de versiones que se utiliza para realizar un seguimiento de los cambios en los archivos de un programa. En esencia, Git es un sistema que te permite registrar y guardar diferentes versiones de tus archivos a medida que los vas editando, lo que facilita la colaboración y la gestión de proyectos en equipo. Además, Git también se utiliza para coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código. Si usas Windows, es posible que ya hayas instalado Git-Bash junto con el sistema operativo, lo que te permite comenzar a utilizar Git sin tener que descargar nada adicional.

![alt text](image.png)

## Un repo

Un repositorio de Git es un lugar donde se almacenan y se gestionan los archivos de un proyecto utilizando el sistema de control de versiones de Git. Git se utiliza para mantener un historial de cambios en los archivos del proyecto y para coordinar el trabajo de varios desarrolladores que contribuyen al proyecto.

Crear un repositorio es muy sencillo. Dentro de una carpeta de código ejecuta el comando:

```bash
cd mi-proyecto
git init
```

Para decirle a git que empiece a "seguir" a los archivos de tu repo tenemos que usar el comando `add`. Por ejemplo, si deseas incluir todos los archivos en la carpeta actual, usa el comando.

```bash
git add .
```

Para ver la situación de tu respositorio, incluyendo que archivos están siendo "trackeados" y cuales sufrieron cambios utiliza el comando:

```bash
git status
```

Con estos comandos ya inicializaste un repositorio y ahora puedes empezar a decirle a git que tome una "foto" de todos los archivos que se están "trackeando" utilizando otros comandos, por ejemplo: commit.

```bash
git commit -a -m "Mi primer commit"

o

git commit -am "Mi primer commit"
```

## checkout

sirve para cambiar de rama o regresar a una version anterior

```bash
git checkout main
```

## Algunos comandos

### git init

Este comando se utiliza para crear un nuevo repositorio de Git. Una vez que se ejecuta este comando en una carpeta, se crea un nuevo subdirectorio llamado ".git", que contiene todos los archivos necesarios para el repositorio.

```bash
$ mkdir proyecto
$ cd proyecto
$ git init
```

### git add

Este comando se utiliza para agregar archivos al índice de Git, lo que significa que Git comenzará a realizar un seguimiento de los cambios en esos archivos.

```bash
$ git add archivo.txt
```

También puedes utilizar el . (punto) para indicarle que tiene que seguir a todos los archivos de esa carpeta y subcarpetas.

```bash
$ git add .
```

### git status

Este comando se utiliza para ver el estado actual de los archivos en el repositorio de Git, es decir, qué archivos han sido modificados, cuáles están en el índice y cuáles no están siendo rastreados por Git.

```bash
$ git status
```

### git commit

Este comando se utiliza para confirmar los cambios realizados en los archivos y registrarlos en el historial de cambios de Git.

```bash
$ git commit -am "Mensaje de confirmación"
```

El argumento -am le indica que quiero commitear todos los archivos que hayan sido modificados (-a) all. Y que además voy a enviar el mensaje del commit (-m) message. Todos los commits deben tener un mensaje.

### git push

Este comando se utiliza para enviar los cambios confirmados a un repositorio remoto, como GitHub.

```bash
$ git push origin main
```

### git pull

Este comando se utiliza para obtener los cambios realizados en el repositorio remoto y actualizar el repositorio local.

```bash
$ git pull origin main
```

### git clone

git pull
Este comando se utiliza para obtener los cambios realizados en el repositorio remoto y actualizar el repositorio local.

```bash
git clone https://github.com/apx-school/menu-web.git
```

Es importante recordar que estos son solo algunos de los comandos más utilizados en Git, y que hay muchos otros comandos y opciones disponibles que pueden ser útiles según las necesidades de cada proyecto. Vamos a ir viendo los comandos más utilizados a medida que vayamos avanzando.
