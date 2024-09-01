
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
/**Instancio la barra lateral */
var barralateral = document.querySelector('#slide-out-rigth');
var instanciaSidenav=M.Sidenav.init(barralateral,{
  edge:"right",
});
// Agregar el evento de clic al ícono de cerrar
document.querySelector('#cerrar-sidenav').addEventListener('click', function() {
  instanciaSidenav.close();
});
/**Instancio la barra lateral */
var barralateral2 = document.querySelector('#slide-out-left');
var instanciaSidenav2=M.Sidenav.init(barralateral2,{
  edge:"left",
})
// Agregar el evento de clic al ícono de cerrar
document.querySelector('#cerrar-sidenav2').addEventListener('click', function() {
  instanciaSidenav2.close();
});
/** */
var scroll = document.querySelectorAll('.scrollspy');
var instances = M.ScrollSpy.init(scroll);
/** */

});
/** */

/** */
function guia2(dato){ 

  var datoEspecie = dato.toLowerCase();
  var nuevoDato = document.getElementById(datoEspecie);
  setTimeout(function() {
    nuevoDato.scrollIntoView({ behavior: 'smooth' }); 
    const offset = 40; // Ajusta este valor según el espacio adicional deseado
    window.scrollBy(0, -offset); // Desplaza la ventana hacia arriba
}, 00); // Espera un poco para asegurar que scrollIntoView se complete
 
    if (nuevoDato.style.display === "none" || nuevoDato.style.display === "") {
      cerrarSecciones();
      nuevoDato.style.display = "block";
    
  } else {
      cerrarSecciones();
      abrirTextoInicio();
    }
   
desplegarEspecies();
}
/** */
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


