const prompt = require("prompt-sync")();

const caja = require("./caja");
const cocina = require("../Cocina/cocina");

// BIENVENIDA
console.log(`
====================================
    CAFETERÍA "LA PAUSA PERFECTA"
====================================
`);

// NOMBRE CLIENTE
const nombreCliente = prompt("Nombre del cliente: ");

console.log(`
Bienvenido/a ${nombreCliente}
`);

// MOSTRAR MENÚ
cocina.mostrarMenu();

// PEDIR PRODUCTO
const idProducto = Number(
    prompt("Ingrese el ID del producto: ")
);

// BUSCAR PRODUCTO
const producto = cocina.catalogo.find(
    producto => producto.id === idProducto
);

// VALIDAR PRODUCTO
if (producto) {

    caja.agregarPedido(
        producto.nombre,
        producto.precio
    );

} else {

    console.log(`
Producto no encontrado.
`);

}

// MOSTRAR PEDIDOS
caja.mostrarPedidos();

// TOTAL
console.log(`
====================================
        TOTAL ACUMULADO
====================================

Cliente: ${nombreCliente}
Total a pagar: $${caja.totalAcumulado()}
`);

// DESPEDIDA
console.log(`
====================================
     ¡GRACIAS POR SU VISITA!
====================================
`);