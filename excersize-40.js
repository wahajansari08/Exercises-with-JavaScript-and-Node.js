/**Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
 */

function make_album(artistName, albumTitle, num) {
  const music_album = {
    artistName,
    albumTitle,
    num,
    getNum: function () {
      return this.num;
    },
  };
  return (
    "The artist name is " +
    music_album.artistName +
    ", the album title is " +
    music_album.albumTitle +
    ", and the number of track is " +
    music_album.getNum()
  );
}
album_1 = make_album("Atif Aslam", "Jal Pari", "1");
album_2 = make_album("Ali Zaffar", "Masty", "1");
album_3 = make_album("NFAK", "Mustt Mustt", "1");

console.log(album_1 + "\n" + album_2 + "\n" + album_3);
