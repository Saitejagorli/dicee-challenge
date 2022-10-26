var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var im1="images/"+"dice"+randomNumber1+".png";
var im2="images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",im1);
document.querySelectorAll("img")[1].setAttribute("src",im2);
// who wins
if(randomNumber1>randomNumber2)
     document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
else
    document.querySelector("h1").innerHTML="Draw!";