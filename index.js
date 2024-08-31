
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems,{
  fullWidth:false,
  numVisible:7,
  dist:0,
  nowrap:false,
 shift:0,
 padding:0
});
});

function guia(dato) {
  
  var datoEspecie = dato.toLowerCase();
  var nuevoDato = document.getElementById(datoEspecie);
  
  
    if (nuevoDato.style.display === "none" || nuevoDato.style.display === "") {
      cerrarSecciones();
      nuevoDato.style.display = "block";
    } else {
      cerrarSecciones();
      abrirTextoInicio();
    }
  }


function abrirTextoInicio() {
  var principal = document.getElementById('inicioEspecie');
  cerrarSecciones();
  principal.style.display = "block";
}

function cerrarSecciones() {
  let secciones = document.querySelectorAll('.especie');
  secciones.forEach(function (seccion) {
    seccion.style.display = 'none';
  });
}


