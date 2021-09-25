const URLJSON = '/datos.json'



//Obtengo el JSON con mis datos.
$.getJSON(URLJSON,function (data, estado) {
  console.log(estado);

    //Llamada de functions!
    mostrarProductos(data);
});

function cargaProductos(listado) {
  for (const product of listado) {
    $('#hero').append(`<div class="column">
    <p>hola ${product.first_name}</p> 
  </div>`);
}}

function mostrarProductos(listados) {
    
  $("#hero").empty();
  // CARGA DE DATOS CATALOGO//
  for (const producto of listados) {
    $('#hero').append(` <div class="col-6 col-md-4 mb-4">
                            <div class="card columna">     
                                <div class="card-body">
                                <h5 class="card-title">${producto.first_name}</h5>
                                
                                <img src="${producto.image}" class="card-img-top btnView" alt="...">
                                <p><p id="${producto.id}" type="button" class="btnView mybuttonDos" data-toggle="modal" data-target="#exampleModal"> $${producto.valor}</p>
                                <button id="${producto.id}" class="btn btnCatalogo myButton btnProducto"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                              </svg></button></p>
                                </div>
                            </div>`)
}

}