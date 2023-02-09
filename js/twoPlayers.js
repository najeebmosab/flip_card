const gameBoard = document.querySelector("#gameBoard");
const timeToGame = document.querySelector("#timeToGame");
const scorePlayerOne = document.querySelector("#scorePlayerOne");
const scorePlayerTwo = document.querySelector("#scorePlayerTwo");
const score = document.querySelector("#score");
const returnToGame = document.querySelector("#returnToGame");
let temp = Number(timeToGame.innerHTML)
var checkColor = [];
const backToMinu = document.querySelector("#backToMinu");
var flage=true;
if (flage) {
    alert("Player One Game")
}else
{
    alert("Player Two Game")

}
gameBoard.addEventListener("click", (event) => {
    console.log(event.target.className.includes("childColor"));
    if(!event.target.className.includes("childColor")) {clearCheckColor(); return};
    if (checkColor.includes(event.target)) return;
    flipSoundEffict();
    event.target.style.transform = "rotateY(180deg)";
    event.target.style.opacity = "1";
    checkColor.push(event.target);
    temp -= 1;
    timeToGame.innerHTML = temp;
    if (checkColor.length > 2){clearCheckColor();return;}
    if (checkColor.length > 1) {
        if (checkColor[0].style.backgroundColor === checkColor[1].style.backgroundColor) {
            checkColor=[];
            getRes();
            reFilp()
        }
        else{
            flage=!flage;
            setTimeout(function(){
                clearCheckColor();
                reFilp()
            },1000)
        }
    }
    console.log(flage);
});

function flipSoundEffict() {
    let mySound = new Audio('/assets/sound/flipcard-91468.mp3');
    mySound.play()
}

function clearCheckColor() {
    while (checkColor.length != 0) {
        const div = checkColor.pop();
        div.style.opacity = "0";
        div.style.transform = "rotateY(0deg)";
    }

}
function gameDone() {
    if (Number(score.innerHTML) == 8) {
        let mySound = new Audio('/assets/sound/tadaa-47995.mp3');
        mySound.play()
        if (Number(scorePlayerOne.innerHTML) > Number(scorePlayerTwo.innerHTML)) {
            alert("Player One Is Winner");
        }
        else{
            alert("Player Two Is Winner");
        }
    }
    
}
function getRes() {
    if (flage) {
        let lastScorePlayerOne = Number(scorePlayerOne.innerHTML);
        lastScorePlayerOne+=1;
        scorePlayerOne.innerHTML = lastScorePlayerOne;
    }
    else{
        let lastScorePlayerTwo = Number(scorePlayerTwo.innerHTML);
        lastScorePlayerTwo+=1;
        scorePlayerTwo.innerHTML = lastScorePlayerTwo;       
    }
    let lastScore = Number(score.innerHTML);
    lastScore += 1;
    score.innerHTML = lastScore;
    let mySound = new Audio('/assets/sound/short-success-sound-glockenspiel-treasure-video-game-6346.mp3');
    mySound.play()
    gameDone();

}

function reFilp() {
    temp = 2;
    timeToGame.innerHTML = temp;
    flipSoundEffict()

}

window.onload = startGame();
function startGame() {

    const arr = ["Green", "Blue", "Red", "Yellow", "Purple", "Sienna", "black", "gold"];
    const newArr = [];
    for (; newArr.length != 8;) {
        let rnd = Math.floor(Math.random() * (8 - 1 + 1));
        if (!newArr.includes(arr[rnd])) {
            newArr.push(arr[rnd]);
        }
    }
    console.log(newArr)
    newArr.forEach(el => {
        let div = document.createElement("div");
        div.classList.add("parintColor");
        let divColor = document.createElement("div");
        divColor.style.backgroundColor = el;
        divColor.classList.add("childColor");
        div.appendChild(divColor)
        // divColor.style.width = "100%";
        // divColor.style.height = "20vh";
        gameBoard.appendChild(div);

    });
    const newSecondArr = []
    for (; newSecondArr.length != 8;) {
        let rnd = Math.floor(Math.random() * (8 - 1 + 1));
        if (!newSecondArr.includes(arr[rnd])) {
            newSecondArr.push(arr[rnd]);
        }
    }
    newSecondArr.forEach(el => {
        let div = document.createElement("div");
        div.classList.add("parintColor");
        let divColor = document.createElement("div");
        divColor.style.backgroundColor = el;
        divColor.classList.add("childColor");
        div.appendChild(divColor)
        // divColor.style.width = "100%";
        // divColor.style.height = "20vh";
        gameBoard.appendChild(div);

    });
}


returnToGame.addEventListener("click", () => {
    document.location.reload();
});

backToMinu.addEventListener("click", () => {
    document.location.href = "/index.html";
})
