
// Aqui temos a linguagem de programacão
var movingchar = false; // bool, booleando, tem apenas dois valores (true, false)
var rotatingChar = false;
var char1 = document.querySelector('.char');
var char1X = 0;
var char1Y = 0;
var charScale = 1;
var charMirror = 1;
var rotationStartX = 0;
var charRotate = 0;
char1.style.top = "90px";
char1.style.left = "30px";

document.addEventListener("mousemove", function (evento) {
    if (movingchar) {
        char1.style.left = evento.clientX - char1X + "px";
        char1.style.top = evento.clientY - char1Y + "px";
    } else if (rotatingChar ){
        var rotationEndX = evento.clientX;
        var rotationDelta = rotationEndX - rotationStartX;
        charRotate += rotationDelta / 5;
        let styleScale = "scale(" + charScale + ") scaleX(" + charMirror + ") rotate(" + (charRotate * -1) + "deg)";
        char1.style.transform = styleScale;
        rotationStartX = rotationEndX;
    }
});

// Estamos DECLARANDO uma funcão

char1.addEventListener("mousedown", function (e) {
    e.preventDefault();

    if (e.button == 0) { //botao esquerdo do mouse
        char1X = e.clientX - char1.getBoundingClientRect().left;
        char1Y = e.clientY - char1.getBoundingClientRect().top;
        movingchar = true;
    } else if (e.button == 1) { //botao do meio do mouse (scroll)
        charMirror *= -1
        let styleScale = "scale(" + charScale + ") scaleX(" + charMirror + ") rotate(" + charRotate + "deg)";
        char1.style.transform = styleScale;
    } else if (e.button == 2) { //botao direito do mouse
        e.stopPropagation();
        rotatingChar = true;
    }
})

// startMoveChar é uma funcão userDefined


document.addEventListener("mouseup", function () {
    movingchar = false;
    rotatingChar = false;
})

char1.addEventListener("wheel", function (evento) {
    if(evento.shiftKey){
        evento.preventDefault();
        if (evento.deltaY > 0) {
            if (charScale < 2) {
                charScale += 0.1
            }
        } else {
            if (charScale > 0.5) {
                charScale -= 0.1
            }
        }
        let styleScale = "scale(" + charScale + ") scaleX(" + charMirror + ") rotate(" + charRotate + "deg)";
        char1.style.transform = styleScale;
    }

}) 
document.addEventListener("contextmenu", function (evt) {
    evt.preventDefault();
})

// Console.log é um funcão BuildIn
console.log(char1);