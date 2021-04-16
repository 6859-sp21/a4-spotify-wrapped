var chosenSong = 0;

/**
 * Given a dataset, randomly choose a song to display and return the string containing the song & artist information
 *
 * @param array data Dataset containing an array of objects
 * @returns int Index of the chosen song
 */
function getRandomSong(data) {
  // console.log("in get random song");
  clearResult();
  var randIndex = Math.floor(Math.random() * data.length);

  // console.log("rand index is: ");
  // console.log(randIndex);
  var datum = data[randIndex];
  chosenSong = datum;
  var songTitle = datum.name;
  var artist = datum.artist;
  const songElement = document.getElementById("song-title");
  songElement.innerHTML = `${songTitle} by ${artist}`;
  return datum;
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
}

/**
 *
 * @param boolean userInput Whether the user thought the song was a hit or not
 */
function isHit(userInput) {
  const correctAns = chosenSong.target;
  const songName = chosenSong.name;
  const artist = chosenSong.artist;

  const resultElement = document.getElementById("result");
  let hitOrFlopStr = "flop";
  if (correctAns) {
    hitOrFlopStr = "hit";
  }
  if (userInput == correctAns) {
    resultElement.innerHTML = `<div class="alert alert-info" style= "background-color: #D5F9D6" role="alert">
        Congratulations! You are correct! "${songName}" by ${artist} was a ${hitOrFlopStr}!
      </div>`;
  } else {
    resultElement.innerHTML = `<div class="alert alert-warning" style = "color: white; background-color: #F1ABA5"role="alert">
        "${songName}" was actually a ${hitOrFlopStr}.
      </div>`;
  }
}
