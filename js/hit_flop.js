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
  return datum;
}

function clearResult() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.visibility = "hidden";
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
  document.getElementById("result").style.visibility = "visible";

  let hitOrFlopStr = "flop";
  if (correctAns) {
    hitOrFlopStr = "hit";
  }

  if (userInput == !!correctAns) {
    var resultContent = `<div>
    You are <strong>CORRECT</strong>!<br>
    "${songName}" by ${artist} was a ${hitOrFlopStr}<br>`;

    if (correctAns) {
      resultContent += `The song was featured in the weekly Billboard top 100 in the ${chosenSong.decade}
      </div>`;
    } else {
      resultContent += `The song was a flop that never appeared in the Billboard top 100`;
    }

    resultElement.innerHTML = resultContent;
  } else {
    resultElement.innerHTML = `<div>
        "${songName}" was actually a ${hitOrFlopStr}
      </div>`;
  }
}
