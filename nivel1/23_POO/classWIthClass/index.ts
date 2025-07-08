class Song {
  title: string;
  duration: number;
  constructor(title: string, duration: number) {
    this.title = title;
    this.duration = duration;
  }
}

class Album {
  title: string;
  songs: Song[];
  constructor(title: string, songs: Song[]) {
    this.title = title;
    this.songs = songs;
  }
  addSong(song: Song) {
    this.songs.push(song);
  }
}

class Banda {
  members: string[];
  albums: Album[];
  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }
  addAlbum(album: Album) {
    this.albums.push(album);
  }
  addMember(member: string) {
    this.members.push(member);
  }
  removeMember(member: string) {
    this.members = this.members.filter((m) => m !== member);
  }

  getAllMembers() {
    return this.members;
  }
}

function main() {
  const song1 = new Song("Cancion 1", 3);
  const song2 = new Song("Cancion 2", 4);
  const song3 = new Song("Cancion 3", 5);
  const song4 = new Song("Cancion 4", 6);
  const album1 = {
    title: "Album 1",
    songs: [song1, song2],
    addSong(song: Song) {
      this.songs.push(song);
    },
  };
  const album2 = new Album("Album 2", [song3, song4]);
  const unaBanda = new Banda(["Juan", "Pedro", "Maria"], [album1, album2]);
  console.log(unaBanda.members);
  console.log(unaBanda.albums);
  unaBanda.addAlbum(new Album("Album 3", [song1, song2]));
  console.log(unaBanda.albums);
  unaBanda.addMember("Luis");
  console.log(unaBanda.members);
  unaBanda.removeMember("Juan");
  console.log(unaBanda.members);
  console.log(unaBanda.getAllMembers());
}

main();
