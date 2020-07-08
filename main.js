(function(){
"use strict"
// var divs = document.querySelectorAll('.circle-modified')
// divs.innerHTML = ''

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

    console.log(hexCodes)

// 2. Elegimos al Hex correcto
var correctRandomHex = hexCodes[ Math.floor(Math.random() * hexCodes.length ) ]
    console.log(correctRandomHex)

//4. Poner el Hex correcto en la etiqueta hexCode
    var hexText = document.getElementById('hex-code')
    hexText.innerHTML = correctRandomHex

//   6.- Borrar los datos por default en correcto, 
  var selected = document.getElementById('answer');
  selected.innerHTML = ''

//   for(var i=0; i< hexCodes.length; i++){ 

//   if (correctRandomHex === hexCodes[i] ) {
//     document.getElementById("one").style.backgroundColor = correctRandomHex;
//     document.getElementById("two").style.backgroundColor = incorrectRandomHex;
//     document.getElementById("three").style.backgroundColor = incorrectRandomHex;
//     document.getElementById("one").addEventListener("click", function() {alert("Correct!")});
//     document.getElementById("two").addEventListener("click", function() {alert("Incorrect!")});
//     document.getElementById("three").addEventListener("click", function() {alert("Incorrect!")});
// }

// else if (correctRandomHex === hexCodes[i] ){ 
//     document.getElementById("second").style.backgroundColor = correctRandomHex;
//     document.getElementById("one").style.backgroundColor = incorrectRandomHex;
//     document.getElementById("three").style.backgroundColor = incorrectRandomHex;
//     document.getElementById("second").addEventListener("click", function() {alert("Correct!")});
//     document.getElementById("one").addEventListener("click", function() {alert("Incorrect!")});
//     document.getElementById("three").addEventListener("click", function() {alert("Incorrect!")});
// }

// else {
//     document.getElementById("three").style.backgroundColor = correctRandomHex;
//     document.getElementById("one").style.backgroundColor = incorrectRandomHex;
//     document.getElementById("two").style.backgroundColor = incorrectRandomHex;
//     document.getElementById("three").addEventListener("click", function() {alert("Correct!")});
//     document.getElementById("one").addEventListener("click", function() {alert("Incorrect!")});
//     document.getElementById("two").addEventListener("click", function() {alert("Incorrect!")});

// }
//   }
//2. Mostrar los tres Hex aleatorios 
for(var i=0; i< hexCodes.length; i++){ 

var background = document.getElementById("one ").style.backgroundColor
    // document.getElementById("one").style.backgroundColor = hexCodes[i];
    // document.getElementById("two").style.backgroundColor = hexCodes[i-1];
    // document.getElementById("three").style.backgroundColor = hexCodes[i-2];
    // var circulos = document.createElement('div');
    // circulos.className = "circle";
    // document.querySelectorAll(".circle").style.backgroundColor=hexCodes[i]
    

}


})();