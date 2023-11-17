// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let RandomNumber1=0,RandomNumber2=0;
let div1=document.getElementById("number1");
let div2=document.getElementById("number2");
//in function Operators

// Iteration 3: Creating variables required to make the game functional
let add = document.getElementById("plus");
let substract = document.getElementById("minus");
let multiply = document.getElementById("mul");
let divide = document.getElementById("divide");
let modulo = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let div3=document.getElementById("number3");
// declared variable num3 at line 29.

// Iteration 5: Creating a randomise function to make the game functional
function random(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);
}
function randomOperation(){
    let sign=["add","substract","multiply","division","modulo"];
    let randomIndex=random(0,sign.length-1);
    let final= sign[randomIndex];
    return final;  
}
let num3;
Operators()
function Operators(){
let Operation = randomOperation();
RandomNumber1=Math.ceil(Math.random()*100)+1; 
RandomNumber2=Math.ceil(Math.random()*100)+1; 
if(RandomNumber2>RandomNumber1){
    var temp=RandomNumber1
    RandomNumber1=RandomNumber2
    RandomNumber2=temp
}
switch (Operation){
    case "add":
         num3= RandomNumber1+RandomNumber2;
         break;
    case "substract":
        num3=RandomNumber1-RandomNumber2
        break
         
    case "multiply":
         num3= RandomNumber1*RandomNumber2;
         break
    case "division":
         num3= Math.round(RandomNumber1/RandomNumber2);
         break
    case "modulo":
         num3= RandomNumber1%RandomNumber2;

}
console.log(RandomNumber1,RandomNumber2,Operation,num3)
div1.innerText=RandomNumber1;
div2.innerText=RandomNumber2;
div3.innerHTML=num3;
}

// Iteration 6: Making the Operators (button) functional
let score=0;
add.addEventListener("click",function(){
    if (num3==RandomNumber1+RandomNumber2){
        score++;
        console.log(score)
        Operators();
        resetTime(timing);
    }
    else {
        window.location.href="gameover.html";
        localStorage.setItem('score',score);
    }
})
substract.addEventListener("click",function(){
    if (num3==RandomNumber1-RandomNumber2){
        score++;
        console.log(score)
        Operators();
        resetTime(timing);
    }
    else {
        window.location.href="gameover.html";
        localStorage.setItem('score',score);
    }
})
multiply.addEventListener("click",function(){
    if (num3==RandomNumber1*RandomNumber2){
        score++;
        console.log(score)
        Operators();
        resetTime(timing);
    }
    else {
        window.location.href="gameover.html";
        localStorage.setItem('score',score);
    }
})
divide.addEventListener("click",function(){
    if (num3=RandomNumber1/RandomNumber2){
        score++;
        console.log(score)
        Operators();
        resetTime(timing);
    }
    else {
        window.location.href="gameover.html";
        localStorage.setItem('score',score);
    }
})
modulo.addEventListener("click",function(){
    if (num3==RandomNumber1%RandomNumber2){
        score++;
        console.log(score)
        Operators();
        resetTime(timing);
    }
    else {
        window.location.href="gameover.html";
        localStorage.setItem('score',score);
    }
})

// Iteration 7: Making Timer functional
let time=20;
let timer=document.getElementById("timer");
var timing;
function timerON(){
    time = 20;
        timing =setInterval(function(){
        time--;
        if (time!=0){
            timer.innerHTML="<p>"+time+"</p>";
        }
        else{
            window.location.href="gameover.html"
            localStorage.setItem('score',score);
        }
        
    },1000);
}

function resetTime(timing) {
    clearInterval(timing);
    timerON();
  }
  
  timerON();


 