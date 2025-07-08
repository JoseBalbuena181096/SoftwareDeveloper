interface Album {
  title: string;
  songs: string[];
}

class Banda {
  private members: string[];
  private albums: Album[];

  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }
  public getFirstAlbum(): Album {
    return this.albums[0];
  }

  public getAllMembers(): string[] {
    return this.members;
  }

  public getRandomSong(albumTitle: string): string {
    const album = this.albums.find((album) => album.title === albumTitle);
    if (!album) {
      throw new Error("Album no encontrado");
    }
    const randomIndex = Math.floor(Math.random() * album.songs.length);
    return album.songs[randomIndex];
  }
}
