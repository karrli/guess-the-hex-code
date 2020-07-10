(function(){
"use strict"


// 1. Generamos 3 HEX codes aleatorios
function getHexCodes(){
    var random = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log("Hex Code:",random)
    return random;
}
    console.log(getHexCodes())

    var hexCodes = []

   
    for(var i=0; i < 3; i++){ 
        var hex = getHexCodes()
        hexCodes.push(hex);
    }

    // console.log(hexCodes)
    // console.log(hexCodes[0])

// 2. Elegimos al Hex correcto
var correctRandomHex =  hexCodes[0]
    console.log(correctRandomHex)
// 3. Elegimos a los Hex incorrectos
var incorrectRandomHex =  hexCodes[1] 
    console.log(incorrectRandomHex)
var incorrectRandomHex2 = hexCodes[2] 
    console.log(incorrectRandomHex2)

//4. Poner el Hex correcto en la etiqueta hexCode
    var hexText = document.getElementById('hex-code')
    hexText.innerHTML = correctRandomHex

//   5.- Borrar los datos por default en correcto, 
  var selected = document.getElementById('answer');
  selected.innerHTML = ''

//6. Mostrar los tres Hex aleatorios y etiquetas
var correctColor = Math.floor(Math.random()*hexCodes.length);
console.log(correctColor)

if (correctColor === 0) { 
    document.getElementById("one").style.backgroundColor = correctRandomHex
    document.getElementById("two").style.backgroundColor = incorrectRandomHex
    document.getElementById("three").style.backgroundColor = incorrectRandomHex2
    document.getElementById("one").addEventListener("click", function() {answer.innerHTML = "Yes!"});
    document.getElementById("two").addEventListener("click", function() {answer.innerHTML = "Oh :("});
    document.getElementById("three").addEventListener("click", function() {answer.innerHTML = "Oh :("});

}
else if (correctColor === 1 ){ 
    document.getElementById("two").style.backgroundColor = correctRandomHex;
    document.getElementById("one").style.backgroundColor = incorrectRandomHex;
    document.getElementById("three").style.backgroundColor = incorrectRandomHex2;
    document.getElementById("two").addEventListener("click", function() {answer.innerHTML = "Yes!"});
    document.getElementById("one").addEventListener("click", function() {answer.innerHTML = "Oh :("});
    document.getElementById("three").addEventListener("click", function() {answer.innerHTML = "Oh :("});
}
else {
    document.getElementById("three").style.backgroundColor = correctRandomHex;
    document.getElementById("one").style.backgroundColor = incorrectRandomHex;
    document.getElementById("two").style.backgroundColor = incorrectRandomHex2;
    document.getElementById("three").addEventListener("click", function() {answer.innerHTML = "Yes!"});
    document.getElementById("one").addEventListener("click", function() {answer.innerHTML = "Oh :("});
    document.getElementById("two").addEventListener("click", function() {answer.innerHTML = "Oh :("});
}

// // document.getElementsByClassName("circle").style.background=color
// var x, l, i;
// x = document.getElementsByClassName("circle circle-modified");
// l = x.length;
// for (i = 0; i < l; i++) {
    
//     document.getElementById("one").style.backgroundColor = hexCodes[i]



})();