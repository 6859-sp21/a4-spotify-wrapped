var chosenSong = 0;

/**
 * Given a dataset, randomly choose a song to display and return the string containing the song & artist information
 *
 * @param array data Dataset containing an array of objects
 * @returns int Index of the chosen song
 */
function getRandomSong(data) {
  console.log("in get random song");
  clearResult();
  var randIndex = Math.floor(Math.random() * data.length);

  console.log("rand index is: ");
  console.log(randIndex);
  var datum = data[randIndex];
  chosenSong = datum;
  var songTitle = datum.name;
  var artist = datum.artist;
  const songElement = document.getElementById("song-title");
  songElement.innerHTML = `${songTitle} by ${artist}`;
  makeCircularBarplot(chosenSong);
  makeArtist(chosenSong, data);
  return datum;
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
}

function getSpecificSong() {}

/**
 *
 * @param boolean userInput Whether the user thought the song was a hit or not
 */
function isHit(userInput) {
  // debugger
  const correctAns = chosenSong.target;
  // console.log(chosenSong)
  const songName = chosenSong.name;
  const artist = chosenSong.artist;

  const resultElement = document.getElementById("result");
  if (userInput == !!correctAns) {
    resultElement.innerHTML = `<div class="alert alert-info" role="alert">
        Congratualtions! You are correct! "${songName}" by ${artist} was a hit!
      </div>`;
  } else {
    let hitOrFlopStr = "flop";
    if (correctAns) {
      hitOrFlopStr = "hit";
    }
    resultElement.innerHTML = `<div class="alert alert-warning" role="alert">
        "${songName}" was actually a ${hitOrFlopStr}
      </div>`;
  }
}
