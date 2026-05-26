const catalogo = [

    { id: 1, nombre: "Café Moka Chico", categoria: "Bebida", precio: 30, porcion: "250 ml" },
    { id: 2, nombre: "Café Moka Mediano", categoria: "Bebida", precio: 40, porcion: "500 ml" },
    { id: 3, nombre: "Café Moka Grande", categoria: "Bebida", precio: 55, porcion: "800 ml" },

    { id: 4, nombre: "Café Capuchino Chico", categoria: "Bebida", precio: 40, porcion: "250 ml" },
    { id: 5, nombre: "Café Capuchino Mediano", categoria: "Bebida", precio: 50, porcion: "500 ml" },
    { id: 6, nombre: "Café Capuchino Grande", categoria: "Bebida", precio: 65, porcion: "800 ml" },

    { id: 7, nombre: "Sincronizadas", categoria: "Comida", precio: 40, porcion: "2 piezas" },
    { id: 8, nombre: "Sándwich de Pollo", categoria: "Comida", precio: 70, porcion: "1 unidad" },

    { id: 9, nombre: "Galletas de vainilla", categoria: "Postre", precio: 25, porcion: "Paquete de 4" },
    { id: 10, nombre: "Pastel de chocolate", categoria: "Postre", precio: 50, porcion: "1 rebanada" }

];

// MOSTRAR MENÚ
function mostrarMenu() {

    console.log(`
====================================
              MENÚ
====================================
`);

    catalogo.forEach(producto => {

        console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Categoría: ${producto.categoria}
Precio: $${producto.precio}
Porción: ${producto.porcion}
------------------------------------`
        );

    });

}

module.exports = {

    catalogo,
    mostrarMenu

};