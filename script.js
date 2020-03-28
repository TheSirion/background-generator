var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

console.log(body);

css.textContent = "linear-gradient(to right, red , yellow);"

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
randomButton.addEventListener("click", setRandomColors);

function setColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"
}

function setRandomColors() {
    var red1 = getRandomInt(0, 256);
    var green1 = getRandomInt(0, 256);
    var blue1 = getRandomInt(0, 256);

    var red2 = getRandomInt(0, 256);
    var green2 = getRandomInt(0, 256);
    var blue2 = getRandomInt(0, 256);

    var color1 = rgbToHex(red1) + rgbToHex(green1) + rgbToHex(blue1);
    var color2 = rgbToHex(red2) + rgbToHex(green2) + rgbToHex(blue2);

    body.style.background = "linear-gradient(to right, #" + color1 + ", #" + color2 + ")";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};