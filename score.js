// Iteration 8: Making scoreboard functional
let storedScore = localStorage.getItem("score");
let showScore = document.getElementById("score-board");
showScore.innerHTML=storedScore;
// For play again button
let overButton= document.getElementById("play-again-button");
overButton.addEventListener("click",function(){
    window.location.href="index.html";
});