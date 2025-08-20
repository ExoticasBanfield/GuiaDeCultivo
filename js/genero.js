document.addEventListener('DOMContentLoaded', function () {
  const basePath = location.pathname.includes("/genero/") ? ".." : ".";
  // Detectar si estamos dentro de la carpeta "genero"
  const isInGeneroFolder = window.location.pathname.includes("/genero/");
  cargarComponente("header", `${basePath}/componentes/header.html`, () => {
    document.querySelectorAll(".header a").forEach(a => {
      let href = a.getAttribute("href");
      
      // Solo modificar si apunta a un HTML de género
      if (!href.startsWith("#") && !href.startsWith("https")) { // Evitar enlaces internos
        if (isInGeneroFolder) {
          if(href.toLocaleLowerCase()=="index.html"){
            href=href.replace(href,`${basePath}/${href}`);
          }else{
          // Si ya estamos en /genero/, dejar solo el archivo
          href = href;
          }
        } else {
          // Si estamos en index u otra carpeta, asegurar que apunte a /genero/
          if (!href.startsWith("genero/")) {
            href = "genero/" + href;
          }
        }
        a.setAttribute("href", href);
      }
    });
    document.querySelectorAll(".responsive-img").forEach(img => {
      let src = img.getAttribute("src");
      if (isInGeneroFolder) {
        if(src!=null){
        src =src.replace(src,`${basePath}/${src}`);
        img.setAttribute("src", src);
      }
      }
    });
    // Ajustar enlaces del menú de géneros
    document.querySelectorAll("#slide-out-rigth a").forEach(a => {
      let href = a.getAttribute("href");

      // Solo modificar si apunta a un HTML de género
      if (!href.startsWith("#") && !href.startsWith("https")) { // Evitar enlaces internos
        if (isInGeneroFolder) {
          // Si ya estamos en /genero/, dejar solo el archivo
          href = href.replace("genero/", "");
        } else {
          // Si estamos en index u otra carpeta, asegurar que apunte a /genero/
          if (!href.startsWith("genero/")) {
            href = "genero/" + href;
          }
        }

        a.setAttribute("href", href);
      }
    });
    document.querySelectorAll("#slide-out-left img").forEach(img => {

      let src = img.getAttribute("src");
      if (isInGeneroFolder) {
        src = `${basePath}/${src}`;
        img.setAttribute("src", src);
      }
    });

    /**Instancio la barra lateral right*/
    var barralateral = document.querySelector('#slide-out-rigth');
    var instanciaSidenav = M.Sidenav.init(barralateral, {
      edge: "right",
      inDuration: 600,
      outDuration: 600
    });
    // Agregar el evento de clic al ícono de cerrar
    document.querySelector('#cerrar-sidenav').addEventListener('click', function () {
      instanciaSidenav.close();
    });
    /**Instancio la barra lateral left */
    var barralateral2 = document.querySelector('#slide-out-left');
    var instanciaSidenav2 = M.Sidenav.init(barralateral2, {
      edge: "left",
    })

  });
  cargarComponente("footer", `${basePath}/componentes/footer.html`, () => {
    document.querySelectorAll("#navegacion-footer a").forEach(a => {
      let href = a.getAttribute("href");

      // Solo modificar si apunta a un HTML de género
      if (!href.startsWith("#") && !href.startsWith("https")) { // Evitar enlaces internos
        if (isInGeneroFolder) {
          
          // Si ya estamos en /genero/, dejar solo el archivo
          href = href.replace("genero/", "");
          
        } else {
          // Si estamos en index u otra carpeta, asegurar que apunte a /genero/
          if (!href.startsWith("genero/")) {
            href = "genero/" + href;
          }
        }

        a.setAttribute("href", href);
      }
    });
  });
  cargarComponente("header-bottom", `${basePath}/componentes/header-bottom.html`, () => {
    document.querySelectorAll(".bottom-nav a").forEach(a => {
      let href = a.getAttribute("href");

      // Solo modificar si apunta a un HTML de género
      if (!href.startsWith("#") && !href.startsWith("https")) { // Evitar enlaces internos
        if (isInGeneroFolder) {
          // Si ya estamos en /genero/, dejar solo el archivo
          href = href.replace(href, `${basePath}/${href}`);
        } else {
          // Si estamos en index u otra carpeta, asegurar que apunte a /genero/
          if (!href.startsWith("index")) {
            href = href;
          }
        }

        a.setAttribute("href", href);
      }
    });
    // Agregar el evento de clic al ícono de cerrar del header-bottom
    var barraLateralRigth = document.querySelector('#slide-out-rigth');
    var instanciaSidenavRigth = M.Sidenav.getInstance(barraLateralRigth);
    document.querySelector('#cerrar-sidenav-rigth-bottom').addEventListener('click', function () {
      if (instanciaSidenavRigth.isOpen) {
        instanciaSidenavRigth.close();
      } else {
        instanciaSidenavRigth.open();
      }
    });
    /**                            */
    var barraLateralLeft = document.querySelector('#slide-out-left');
    var instanciaSidenavLeft = M.Sidenav.getInstance(barraLateralLeft);
    document.querySelector('#cerrar-sidenav-left-bottom').addEventListener('click', function () {
      if (instanciaSidenavLeft.isOpen) {
        instanciaSidenavLeft.close();
      } else if (!instanciaSidenavLeft.isOpen) {
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