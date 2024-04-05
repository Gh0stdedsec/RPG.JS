
// Aqui temos a linguagem de programacão
var movingchar = false; // bool, booleando, tem apenas dois valores (true, false)
var char1 = document.querySelector('.char');
var char1X = 0;
var char1Y = 0;
var charOrientation = 0;
var charScale = 1;
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
    if(e.button == 0){
char1X = e.offsetX;
char1Y = e.offsetY;
movingchar = true;

    }else if(e.button == 1){
console.log(getComputedStyle(char1).transform);
if(scale == 'matrix(-1, 0, 0, 1, 0, 0)'){
    char1.style.transform = "matrix(1, 0, 0, 1, 0, 0)"
}else{
    char1.style.transform = "matrix(-1, 0, 0, 1, 0, 0)"
}
    }
})

// startMoveChar é uma funcão userDefined


document.addEventListener("mouseup", function (){
    movingchar = false;
})

char1.addEventListener("wheel", function (evento){
    evento.preventDefault();
    if (evento.deltaY > 0){
        charScale += 0.1
    }else{
        charScale -= 0.1
    }
    let styleScale = "scale(" + charScale + ")";

    char1.style.transform = styleScale;

    console.log("rolando");
})

// Console.log é um funcão BuildIn
console.log(char1);