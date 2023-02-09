const playerOne = document.querySelector("#playerOne");
const playertwo = document.querySelector("#playertwo");

playerOne.addEventListener("click", () => {
    window.location.href = "/playOne.html";
});

playertwo.addEventListener("click", () => {
    window.location.href = "/twoPlayers.html";
});

// function as(...asd) {
//     console.log(asd);
// }

// as("a","s","d","c","x","z","v");