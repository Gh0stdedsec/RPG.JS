
// Aqui temos a linguagem de programacão
var movingchar = false; // bool, booleando, tem apenas dois valores (true, false)
var char1 = document.querySelector('.char');
var char1X = 0;
var char1Y = 0;
var charOrientation = 0;
var charScale = 1;
var charMirror = 1;
char1.style.top = "90px";
char1.style.left = "30px";
document.addEventListener("mousemove", function (evento){
    if (movingchar){
console.log(evento);
char1.style.left = evento.clientX - char1X + "px";
char1.style.top = evento.clientY - char1Y + "px";
    }
});

// Estamos DECLARANDO uma funcão

char1.addEventListener("mousedown", function (e){
    console.log(e)
    e.preventDefault();

    var scale = getComputedStyle(char1).transform;
    if(e.button == 0){ //botao esquerdo do mouse
        char1X = e.clientX - char1.getBoundingClientRect().left;
        char1Y = e.clientY - char1.getBoundingClientRect().top;
        movingchar = true;
    }else if(e.button == 1){ //botao do meio do mouse (scroll)
        charMirror *= -1
        let styleScale = "scale(" + charScale + ") scaleX(" + charMirror + ")";
        char1.style.transform = styleScale;
    }
})

// startMoveChar é uma funcão userDefined


document.addEventListener("mouseup", function (){
    movingchar = false;
})

char1.addEventListener("wheel", function (evento){
    evento.preventDefault();
    if (evento.deltaY > 0){
        if (charScale < 2){
            charScale += 0.1
        }
    }else{
        if (charScale > 0.5){
            charScale -= 0.1
        }
    }
    let styleScale = "scale(" + charScale + ") scaleX(" + charMirror + ")";

    char1.style.transform = styleScale;

    console.log("rolando");
})

// Console.log é um funcão BuildIn
console.log(char1);