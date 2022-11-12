//dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImages = "dice" + randomNumber1 + ".png";

var randomImagesSource = "./images/" + randomImages;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesSource);


//dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "dice" + randomNumber2 + ".png";

var randomImagesSource2 = "./images/" + randomImages2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}