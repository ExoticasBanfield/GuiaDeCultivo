
document.addEventListener('DOMContentLoaded', function () {
  const basePath = location.pathname.includes("/genero/") ? ".." : ".";
  const isInGeneroFolder = window.location.pathname.includes("/genero/");
  cargarComponente("header", `${basePath}/componentes/header.html`, () => {
    /**Instancio la barra lateral */
    var barralateral = document.querySelector('#slide-out-rigth');
    var instanciaSidenav = M.Sidenav.init(barralateral, {
      edge: "right",
      inDuration: 600,
      outDuration:600
    });
    // Agregar el evento de clic al ícono de cerrar
    document.querySelector('#cerrar-sidenav').addEventListener('click', function () {
      instanciaSidenav.close();
    });
    /**Instancio la barra lateral */
    var barralateral2 = document.querySelector('#slide-out-left');
    var instanciaSidenav2 = M.Sidenav.init(barralateral2, {
      edge: "left",
    })
    // Agregar el evento de clic al ícono de cerrar
    
    /** */

  });
  cargarComponente("footer", `${basePath}/componentes/footer.html`);
  cargarComponente("header-bottom", `${basePath}/componentes/header-bottom.html`,()=>{
          document.querySelectorAll(".bottom-nav a").forEach(a => {
            let href = a.getAttribute("href");
        
            // Solo modificar si apunta a un HTML de género
            if (!href.startsWith("#") && !href.startsWith("https")) { // Evitar enlaces internos
                if (isInGeneroFolder) {
                    // Si ya estamos en /genero/, dejar solo el archivo
                    href = href.replace(href,`${basePath}/${href}`);
                } else {
                    // Si estamos en index u otra carpeta, asegurar que apunte a /genero/
                    if (!href.startsWith("index")) {
                        href =href;
                    }
                }
                
                a.setAttribute("href", href);
            }
          });
        // Agregar el evento de clic al ícono de cerrar del header-bottom
        var barraLateralRigth = document.querySelector('#slide-out-rigth');
        var instanciaSidenavRigth = M.Sidenav.getInstance(barraLateralRigth);
        document.querySelector('#cerrar-sidenav-rigth-bottom').addEventListener('click', function () {
          if(instanciaSidenavRigth.isOpen){
            instanciaSidenavRigth.close();
          }else{
            instanciaSidenavRigth.open();
          }
        });
        /**                            */
        var barraLateralLeft = document.querySelector('#slide-out-left');
        var instanciaSidenavLeft = M.Sidenav.getInstance(barraLateralLeft);
        document.querySelector('#cerrar-sidenav-left-bottom').addEventListener('click', function () {
          if(instanciaSidenavLeft.isOpen){
            instanciaSidenavLeft.close();
          }else if(!instanciaSidenavLeft.isOpen){
            instanciaSidenavLeft.open();
          }
          
        });
      });
  //
  var elems = document.querySelectorAll('.carousel');
  M.Carousel.init(elems, {
    fullWidth: false,
    numVisible: 7,
    dist: 0,
    nowrap: false,
    shift: 0,
    padding: 0
  });
  
  

});
function guia(genero){
  window.location.href=`genero/${genero}-guia-basica.html`;
}



