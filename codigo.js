let tela;

let ctx;

let proxX;

let proxY;

let tamanhoCobraPadrao = 3;

let tamanhoCobra = tamanhoCobraPadrao;

let caminhoCobra = [];

let cobraX = cobraY = 10;

let comidaX = comidaY = 15;

let tamanhoQuadradinho = tamanhoCaminho = 20;

window.onload = function() {
    tela = document.getElementById("canvas");

    ctx = tela.getContext("2d");

    let vel = 8;

    setInterval(desenharJogo, 1000 / vel);
};

function keyDownEvent(tecla) {
    if (tecla = 37) {
        proxX = -1;
        proxY = 0;
    }
    if (tecla = 38) {
        proxX = 0;
        proxY = -1;
    }
    if (tecla = 39) {
        proxX = 1;
        proxY = 0;
    }
    if (tecla = 40) {
        proxX = 0;
        proxY = 1;
    }
}

function desenharJogo() {

    ctx.fillStyle = "#3a9c09";

    ctx.fillRect(0 , 0, tela.width, tela.height);

    ctx.fillStyle = "#ed9315";

    for(let i = 0; i<caminhoCobra.length;i++){
        ctx.fillRect(
            caminhoCobra[i].x*tamanhoCaminho,
            caminhoCobra[i].y*tamanhoCaminho,
            tamanhoCaminho,
            tamanhoCaminho
        );
        if(caminhoCobra[i].x==cobraX && caminhoCobra[i].y == cobraY){
             tamanhoCobra = tamanhoCobraPadrao;  
        }
                 
    }
    caminhoCobra.push({
        x:cobraX,
        y:cobraY
    });
}