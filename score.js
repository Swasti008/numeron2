// Iteration 8: Making scoreboard functional
// let storedScore = localStorage.getItem("score");
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
var score = urlParams.get("score");
let showScore = document.getElementById("score-board");
showScore.innerHTML=score;
// For play again button
let overButton= document.getElementById("play-again-button");
overButton.addEventListener("click",function(){
    window.location.href="index.html";
});