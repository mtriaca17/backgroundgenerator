const cssText = document.querySelector(".gradientStringRGB");
const hexText = document.querySelector(".gradientStringHex")
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");
const randomButton = document.querySelector(".randomColors")

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomGradient);

function getRandomNum(min, max){
    min = 0;
    max = 256;
    return Math.floor(Math.random() * (max-min)) + min;
}

function createRGB(){
    let num1 = getRandomNum();
    let num2 = getRandomNum();
    let num3 = getRandomNum();

    return rgb = ("rgb(" + num1 +","+ num2 + "," + num3 +")")
}

function setGradient(){

    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value +")"; 

    cssText.textContent = body.style.background + ";";
    hexText.textContent = "Hex Code 1: "+ color1.value +  " Hex Code 2: " + color2.value;
}

function setRandomGradient(){
    let rgb1 = createRGB()
    let rgb2 = createRGB()
    
    body.style.background = "linear-gradient(to right, " + rgb1 + "," + rgb2 +")"
    color1.value = stringRGBToHex(rgb1) 
    color2.value = stringRGBToHex(rgb2) 
    cssText.textContent = body.style.background + ";";
    hexText.textContent = "Hex Code 1: "+ color1.value +  " Hex Code 2: " + color2.value;
}

function RGBToHex(r,g,b){
    return "#" + toHex(r)+ toHex(g) + toHex(b)
}

function toHex(n){
    n = parseInt(n, 10);
    if(isNaN(n)) return "00";
    n = Math.max(0, Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)
            + "0123456789ABCDEF".charAt(n%16)    
}


function stringRGBToHex(rgb){
    let rgbString = rgb.slice(4, -1)
    let rgbSplitString = rgbString.split(',')
    return RGBToHex(rgbSplitString[0], rgbSplitString[1], rgbSplitString[2])
}