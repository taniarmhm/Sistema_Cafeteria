const prompt = require("prompt-sync")();

const cliente = require("./Cliente/cliente");
const cocina = require("./Cocina/cocina");
const caja = require("./Caja/caja");


// ====================================
// MÓDULO CLIENTE
// ====================================

cliente.mostrarBienvenida();


// NOMBRE CLIENTE
const nombreCliente = prompt("Nombre del cliente: ");

console.log(`
Bienvenido/a ${nombreCliente}
`);


// ====================================
// MÓDULO COCINA
// ====================================

cocina.mostrarMenu();


// ====================================
// MÓDULO CAJA
// ====================================

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
Total: $${caja.totalAcumulado()}
`);


// ====================================
// MÓDULO CLIENTE
// ====================================

cliente.mostrarDespedida();