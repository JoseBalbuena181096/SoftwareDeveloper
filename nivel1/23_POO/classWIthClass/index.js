var Song = /** @class */ (function () {
    function Song(title, duration) {
        this.title = title;
        this.duration = duration;
    }
    return Song;
}());
var Album = /** @class */ (function () {
    function Album(title, songs) {
        this.title = title;
        this.songs = songs;
    }
    Album.prototype.addSong = function (song) {
        this.songs.push(song);
    };
    return Album;
}());
var Banda = /** @class */ (function () {
    function Banda(members, albums) {
        this.members = members;
        this.albums = albums;
    }
    Banda.prototype.addAlbum = function (album) {
        this.albums.push(album);
    };
    Banda.prototype.addMember = function (member) {
        this.members.push(member);
    };
    Banda.prototype.removeMember = function (member) {
        this.members = this.members.filter(function (m) { return m !== member; });
    };
    Banda.prototype.getAllMembers = function () {
        return this.members;
    };
    return Banda;
}());
function main() {
    var song1 = new Song("Cancion 1", 3);
    var song2 = new Song("Cancion 2", 4);
    var song3 = new Song("Cancion 3", 5);
    var song4 = new Song("Cancion 4", 6);
    var album1 = {
        title: "Album 1",
        songs: [song1, song2],
        addSong: function (song) {
            this.songs.push(song);
        },
    };
    var album2 = new Album("Album 2", [song3, song4]);
    var unaBanda = new Banda(["Juan", "Pedro", "Maria"], [album1, album2]);
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
