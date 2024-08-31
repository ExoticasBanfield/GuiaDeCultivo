
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  M.Carousel.init(elems,{
  fullWidth:false,
  numVisible:7,
  dist:0,
  nowrap:false,
 shift:0,
 padding:0
});
});
function desplegarEspecies(){
  var especies=document.getElementById("desplegable");
  if(especies.style.display==="none" || especies.style.display === ""){
    especies.style.display="block";
  }else{
    especies.style.display="none";
  }
}
function guia(dato) {
  
  var datoEspecie = dato.toLowerCase();
  var nuevoDato = document.getElementById(datoEspecie);
  
  
    if (nuevoDato.style.display === "none" || nuevoDato.style.display === "") {
      cerrarSecciones();
      nuevoDato.style.display = "block";
      desplegarEspecies()
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


