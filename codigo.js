var teclas =
{
  UP: 38,
  DOWN : 40,
  LEFT :37,
  RIGHT :39
};
var x = 0;
var y = 0;
var mover = 10
console.log(teclas);
var vp =document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var fondo ={
  url: "/imagenes/tile.png",
  cargaOk: false
};

var lobo = {
  url: "/imagenes/cerdo.png",
  cargaOk: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);
function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
lobo.objeto = new Image ();
lobo.objeto.src = lobo.url;
lobo.objeto.addEventListener("load", cargarLobo)

function cargarLobo()
{
  lobo.cargaOk = true
  dibujar ();
}

function dibujar ()
{
if (fondo.cargaOk)
    {
      papel.drawImage(fondo.imagen, 0,0);
    }
  if (lobo.cargaOk)
  {
    papel.drawImage(lobo.objeto,x,y);
  }
}
function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1 )) + min;
return resultado;
}
evento = document.addEventListener("keydown", moverLobo)
function moverLobo (evento)
{
  switch (evento.keyCode) {
    case teclas.UP:
      y=y-mover;
    papel.drawImage(fondo.imagen, 0,0);
    papel.drawImage(lobo.objeto,x,y);
    break;
    case teclas.DOWN:
      y=y+mover;
      papel.drawImage(fondo.imagen, 0,0);
      papel.drawImage(lobo.objeto,x,y);
    break;
    case teclas.LEFT:
      x= x-mover
      papel.drawImage(fondo.imagen, 0,0);
      papel.drawImage(lobo.objeto,x,y);
    break;
    case teclas.RIGHT:
    x=x+mover
    papel.drawImage(fondo.imagen, 0,0);
    papel.drawImage(lobo.objeto,x,y);

    break;
    default:
      console.log("el lobo se queda mirando")
  }
}