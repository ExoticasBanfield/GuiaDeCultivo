function cargarComponente(id, ruta, callback) {
    const contenedor = document.getElementById(id);
    if (!contenedor) return;
  
    fetch(ruta)
      .then(r => r.text())
      .then(html => {
        contenedor.innerHTML = html;
        
        if (callback) callback(); 
      })
      .catch(console.error);
  }
  

