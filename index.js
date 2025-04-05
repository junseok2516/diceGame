var dice_p1 = document.querySelector(".img1");
var dice_p2 = document.querySelector(".img2");

var ran1 = Math.floor((Math.random() * 6) + 1); // floor((0 - 0.99... + 1) * 6) == between 0&6
var ran2 = Math.floor((Math.random() * 6) + 1); // floor((0 - 0.99... + 1) * 6) == between 0&6

var newDice_p1 = dice_p1.setAttribute("src", "./images/dice" + ran1 + ".png");
var newDice_p2 = dice_p2.setAttribute("src", "./images/dice" + ran2 + ".png");


if (ran1 > ran2) {
    document.querySelector("h1").textContent = "Player1 Wins!🙌"
} else if (ran1 < ran2) {
    document.querySelector("h1").textContent = "Player2 Wins!🙌"
} else {
    document.querySelector("h1").textContent = "Draw!"
}