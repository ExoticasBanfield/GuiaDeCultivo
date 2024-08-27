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

