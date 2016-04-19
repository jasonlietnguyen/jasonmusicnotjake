//Do Not Modify the getMusic function

function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


function drawSongs(songList){
  console.log(songList);
  var songListElem = document.getElementById('song-list');
  var artist = document.getElementById('artist').value;
  var foo = document.getElementById('artistName');
  
  foo.innerHTML = "Showing " + songList.length + " result for: " + artist;
  
  songListElem.innerHTML = "";
  var songs = "";
  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i];
    songs += '<li class="list-group-item"><div class="row">'
  + '<div class="col-sm-2"><img src="' + currentSong.albumArt + '" alt="album"/></div>'
  + '<div class="col-sm-3">Title: '  + currentSong.title + '<br>Collection: ' + currentSong.collection + '</div>'
  + '<div class="col-sm-5"> <audio controls><source src="' + currentSong.preview + '" type="audio/ogg"></audio> </div><div class="col-sm-2">Price: $' + currentSong.price + '</div></div></li><br>';
  }
  songListElem.innerHTML = songs;
}


