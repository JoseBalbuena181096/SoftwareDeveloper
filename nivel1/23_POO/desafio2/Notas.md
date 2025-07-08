## Clase Banda

Desafío
En este desafío, te proponemos hacer TDD (Test Driven Development) en base a este código. Cómo sabemos, la idea de TDD es que los tests que ya están escritos nos guíen para entender qué funcionalidades necesitamos implementar en nuestro código.

Los tests actúan como una especificación del comportamiento esperado, ayudándonos a escribir solo el código necesario para que pasen las pruebas.

Para esto tenés que crear una clase Banda, con las siguientes características.

### Método constructor

Con los parámetros members y albums.

members espera un array de strings
albums espera un array de objetos con esta estructura: { title, songs:(array de strings) }
Ambos parámetros (members y albums) deben guardarse en alguna propiedad del objeto.

```ts
interface Album {
  title: string;
  songs: string[];
}

class Banda {
  constructor(members: string[], albums: Album[]) {
    // guardamos members y albums en el objeto
  }
}
```

## Método getFirstAlbum():Album

Debe devolver el primer álbum de la banda señalada.

```ts
class Banda {
  getFirstAlbum(): Album {
    return this.albums[0];
  }
}
```

## Método getAllMembers():string[]

Debe devolver un array de strings con el nombre de todos los miembros de la banda señalada.

## Método getRandomSong(albumTitle:string):string

Debe devolver una canción aleatoria del album señalado en el parámetro.
