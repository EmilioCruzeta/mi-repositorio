//var ruta = window.location;
///console.log(ruta);
///document.write("Ruta ",ruta)
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d"); 
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );




/*lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100,100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();*/
///DibujarLinea("red", 100, 100, 200, 200);
function DibujarLinea(color,xinicial, yinicial, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujoPorClick()
{
    console.log(texto);
    //alert("no me toques ahi");

var lineas = parseInt(texto.value);
var lx = 0;
var yi, xf;
var espacio =  ancho/lineas;
    
while(lx < lineas)
{
    yi = espacio * lx;
    xf = espacio *(lx + 1);
    DibujarLinea("#AAF",0,yi,xf,300);
    ///consola.log("Lineas",lx);
    lx += 1;
}
for (lx = 0; lx < lineas; lx++)
{
    yi = espacio * lx;
    xf = espacio *(lx + 1);
    DibujarLinea("red",300,xf,yi,0);
}
/*
for(lx=0; lx<lineas;lx++)
{
    yi = espacio * lx;
    xf = espacio *(lx + 1);
    DibujarLinea("red",300,300,xf,yi);
}*/

DibujarLinea("green",1,1,1,300);
DibujarLinea("green",300,1,1,1);
DibujarLinea("yellow",299,299,299,1);
DibujarLinea("yellow",1,299,299,299);

}