var cssText = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.querySelector(".randomColors")
// console.log(cssText, color1, color2);

// console.log(body);

// body.style.background = "red";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomGradient);

function getRandomNum(min, max){
    min = 0;
    max = 256;
    return Math.floor(Math.random() * (max-min)) + min;
}

function createRGB(){
    var num1 = getRandomNum();
    var num2 = getRandomNum();
    var num3 = getRandomNum();

    return rgb = ("rgb(" + num1 +","+ num2 + "," + num3 +")")
}

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value +")"; 

    cssText.textContent = body.style.background + ";";
}

function setRandomGradient(){
    body.style.background = "linear-gradient(to right, " + createRGB() + "," + createRGB() +")"
    cssText.textContent = body.style.background + ";";
    
}