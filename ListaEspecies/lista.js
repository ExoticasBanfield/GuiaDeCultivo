function lista(dato){
var datoEspecie =dato.toLowerCase();
var nuevoDato = document.getElementById(datoEspecie);
   
if(nuevoDato.style.display==="none"||nuevoDato.style.display===""){
    cerrarSeccionesLista();
    nuevoDato.style.display="block";
 }else {
    cerrarSeccionesLista();
    abrirTextoInicioLista();
 }
}

function abrirTextoInicioLista(){
var principal=document.getElementById('inicioEspecie');
cerrarSeccionesLista();
principal.style.display="block";
}

function cerrarSeccionesLista(){
let secciones=document.querySelectorAll(".especie");
secciones.forEach(function(seccion){
    seccion.style.display="none";
});
}

abrirTextoInicioLista();