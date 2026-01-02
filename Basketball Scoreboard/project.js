let homeScore = 0;
let awayScore = 0;

homeText = document.getElementById("home_score")
awayText = document.getElementById("away_score")

function homeAddOne() {
    homeScore += 1
    homeText.innerText = homeScore
    console.log(homeScore)
}

function homeAddTwo() {
    homeScore += 2
    homeText.innerText = homeScore
    console.log(homeScore)
}

function homeAddThree() {
    homeScore += 3
    homeText.innerText = homeScore
    console.log(homeScore)
}

function awayAddOne() {
    awayScore += 1
    awayText.innerText = awayScore
    console.log(awayScore)
}

function awayAddTwo() {
    awayScore += 2
    awayText.innerText = awayScore
    console.log(awayScore)
}

function awayAddThree() {
    awayScore += 3
    awayText.innerText = awayScore
    console.log(awayScore)
}


function resetScores() {
    homeScore = 0
    awayScore = 0

    homeText.innerText = homeScore
    awayText.innerText = awayScore
}

