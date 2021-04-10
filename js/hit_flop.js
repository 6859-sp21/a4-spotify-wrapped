


var chosenSong = 0
/**
 * Given a dataset, randomly choose a song to display and return the string containing the song & artist information
 *
 * @param array data Dataset containing an array of objects
 * @returns int Index of the chosen song
 */
function getRandomSong(data) {
    var randIndex = Math.floor(Math.random() * data.length)

    console.log('rand index is: ')
    console.log(randIndex)
    var datum = data[randIndex]
    chosenSong = datum
    var songTitle = datum.name
    var artist = datum.artist
    const songElement = document.getElementById('song-title')
    songElement.innerHTML = `${songTitle} by ${artist}`
    return datum

}

/**
 * 
 * @param boolean userInput Whether the user thought the song was a hit or not
 */
function isHit(userInput) {
    console.log('user input is')
    console.log(userInput)
    // debugger
    const correctAns = chosenSong.target

    const resultElement = document.getElementById('result')
    if (userInput == !!correctAns) {
        resultElement.innerHTML = `<div class="alert alert-info" role="alert">
        Congratualtions! You are correct!
      </div>`
    } else {
        let hitOrFlopStr = 'flop'
        if(correctAns) {
            hitOrFlopStr = 'hit'
        }
        resultElement.innerHTML = `<div class="alert alert-warning" role="alert">
        The song was actually a ${hitOrFlopStr}
      </div>`
    }
}