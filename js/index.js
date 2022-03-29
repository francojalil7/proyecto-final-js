class Producto{
    constructor(nombre, talle, descripcion, precio){
        this.nombre = nombre;
        this.talle = talle;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
let productos = [];

//funcion para cargar un  nuevo producto.
function cargarProducto(productos) {
    const producto = new Producto(prompt("Ingrese nombre de la prenda"), prompt("Ingrese talle de la prenda"), prompt("Ingrese una descripción de la prenda"), prompt("Ingrese precio de la prenda"));
    
    productos.push(producto);
    alert("¡Producto cargado!");
}

/*
  //funcion para mostrar productos cargados.
  function mostrarProductosCargados() {
    productos.forEach((producto) => {
      alert(
        `Elegiste ${producto.nombre} por un precio de $ ${producto.precio} en talle ${producto.talle}`
      );
    });
  }
  function filtrarProductos(productos ){
    let precio = prompt("Ingrese un precio para filtrar") 
    alert(productos.filter(producto => producto.precio < precio)) 
  }




  
  // capturo una opcion por prompt.
  let opcion = prompt(`Ingrese una opcion:
                      1 para Cargar Productos:
                      2 para mostrar Productos cargados:
                      3 para Filtrar productos:`);

  // mientras no sea opcion 5 (salir)
  while (opcion !== "5") {
    if (opcion === "1") {
      cargarProducto(productos);
    }
    if (opcion === "2") {
      mostrarProductosCargados(productos);
    }
    
    if (opcion === "3") {
      filtrarProductos(productos);
    }
  
    
    opcion = prompt(
      `Ingrese una opcion:
      1 para Cargar Productos:
      2 para Mostrar Productos cargados:
      3 para Filtrar productos:`);
  }
*/

//agregando manejo de DOM

  let productos2 = [new Producto("Pantalón","42", "lorem sadffsa afsfas adsada", 2000),
                    new Producto("Pantalón","41", "Jean común estampato", 2100),
                    new Producto("Pantalón", 38, "asda jdskga asfaduji iaSUDFAS", 1900),
                    new Producto("Pantalón", 44, "asda afas gafa asgfasfas", 2400)];

                    
let principal = document.querySelector('.vista')  
principal.className = "divProductos"

function agregarProductos(productos){
  for (const producto of productos2) {
    let nuevoProducto = document.createElement('div');
    nuevoProducto.innerHTML =`<img src="./img/pantalon3.jpeg" alt="pantalon 4" class="imgProductos"/>
                              <div class="divProductos">
                              <h5>${producto.nombre}</h5>
                              <p>${producto.descripcion}</p>
                              <p>${producto.precio}</p>
                              <div class="divButton">
                                <button><a>COMPRAR</a></button>
                                <button class="buttonInfo"><a>Más info</a></button>
                              </div>
                              </div>
                              `;
    principal.appendChild(nuevoProducto)     
    console.log("agrego")     
} 
}

let buton = document.querySelector('.buttonProductos')
buton.addEventListener('click', agregarProductos(productos2))
console.log(buton)







  alert("GRACIAS POR SU VISITA")


