var randomNum1 = Math.floor((Math.random() * 6)) + 1;
var randomsource1 = "images/dice_"+randomNum1+".png";
var dice1 = document.querySelectorAll("img")[0];

var randomNum2 = Math.floor((Math.random() * 6)) + 1;
var randomsource2 = "images/dice_"+randomNum2+".png";
var dice2 = document.querySelectorAll("img")[1];



function rolling(){
  var roll = dice1.setAttribute("src", randomsource1);
  var roll1 = dice2.setAttribute("src", randomsource2);
  if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML="Player1 Win";
  }else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML="Player2 Win";
  }else{
    document.querySelector("h1").innerHTML="Draw";
  }

}
var btn = document.getElementByClassName("btn");

btn.addEventListener("click", rolling());
