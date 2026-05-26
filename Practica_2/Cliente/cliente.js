const cocina = require("../Cocina/cocina");

// BIENVENIDA
function mostrarBienvenida() {

    console.log(`
====================================
    CAFETERÍA "LA PAUSA PERFECTA"
====================================
`);

}

// MOSTRAR MENÚ BONITO
function mostrarMenuCliente() {

    console.log(`
============= MENÚ =============
`);

    cocina.catalogo.forEach(producto => {

        console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Categoría: ${producto.categoria}
Precio: $${producto.precio}
Porción: ${producto.porcion}
--------------------------------`
        );

    });

}

// DESPEDIDA
function mostrarDespedida() {

    console.log(`
====================================
     ¡GRACIAS POR SU VISITA!
====================================
`);

}

module.exports = {

    mostrarBienvenida,
    mostrarMenuCliente,
    mostrarDespedida

};