var cssText = document.querySelector(".gradientStringRGB");
var hexText = document.querySelector(".gradientStringHex")
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
    rgb1 = createRGB()
    rgb2 = createRGB()
    
    body.style.background = "linear-gradient(to right, " + rgb1 + "," + rgb2 +")"
    color1.value = stringRGB(rgb1) 
    color2.value = stringRGB(rgb2) 
    cssText.textContent = body.style.background + ";";
    hexText.textContent = "Hex Code 1: "+ color1.value +  " Hex Code 2: " + color2.value;
}

function RGBToHex(r,g,b){
    return "#" + toHex(r)+ toHex(g) + toHex(b)
    // console.log("#"+toHex(r)+ toHex(g)+ toHex(b))

}

function toHex(n){
    n = parseInt(n, 10);
    if(isNaN(n)) return "00";
    n = Math.max(0, Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)
            + "0123456789ABCDEF".charAt(n%16)    
}


function stringRGB(rgb){
    rgbString = rgb.slice(4, -1)
    rgbSplitString = rgbString.split(',')
    return RGBToHex(rgbSplitString[0], rgbSplitString[1], rgbSplitString[2])
}