
function pulaLinha(){
    document.write("<br>");
}

function mostra(resultado){
    document.write("Se passaram " + Math.round(resultado) + " gerações.");
    pulaLinha();
}

var anoAtual = 2022;
var anoInicial = 1500;
var media = 28;

var geracoes = (anoAtual - anoInicial) / media;

mostra(geracoes);

