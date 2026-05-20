// ======================================
// MÓDULO CAJA
// ======================================

const {
    catalogo
} = require("../Cocina/Cocina");

let pedidos = [];

// AGREGAR PEDIDO

function agregarPedido(idProducto) {

    const producto = catalogo.find(
        p => p.id == idProducto
    );

    if(producto){

        pedidos.push(producto);

        console.log(
            `\n✅ ${producto.nombre} agregado`
        );

    } else {

        console.log(
            "\n❌ Producto no encontrado"
        );
    }
}

// VER PEDIDOS

function verPedidos() {

    console.log("\n===== PEDIDOS =====");

    if(pedidos.length === 0){

        console.log("No hay pedidos.");
        return;
    }

    pedidos.forEach(({nombre, precio}, index) => {

        console.log(
            `${index + 1}. ${nombre} - $${precio}`
        );
    });
}

// MODIFICAR PEDIDO

function modificarPedido() {

    verPedidos();

    const prompt = require("prompt-sync")();

    let index = Number(
        prompt("Pedido a modificar: ")
    ) - 1;

    let nuevoID = Number(
        prompt("Nuevo ID de producto: ")
    );

    const nuevoProducto = catalogo.find(
        p => p.id == nuevoID
    );

    if(nuevoProducto && pedidos[index]){

        pedidos[index] = nuevoProducto;

        console.log("✅ Pedido actualizado");

    } else {

        console.log("❌ Datos inválidos");
    }
}

// ELIMINAR PEDIDO

function eliminarPedido() {

    verPedidos();

    const prompt = require("prompt-sync")();

    let index = Number(
        prompt("Pedido a eliminar: ")
    ) - 1;

    if(pedidos[index]){

        pedidos.splice(index, 1);

        console.log("✅ Pedido eliminado");

    } else {

        console.log("❌ Pedido inválido");
    }
}

// REDUCE → SUBTOTAL

function calcularSubtotal() {

    return pedidos.reduce(
        (acc, producto) => acc + producto.precio,
        0
    );
}

// IVA

function calcularIVA() {

    return calcularSubtotal() * 0.16;
}

// TOTAL

function calcularTotal() {

    return calcularSubtotal() + calcularIVA();
}

// COBRAR

function cobrar() {

    const subtotal = calcularSubtotal();
    const iva = calcularIVA();
    const total = calcularTotal();

    console.log("\n===== TICKET =====");

    verPedidos();

    console.log(`\nSubtotal: $${subtotal}`);
    console.log(`IVA: $${iva}`);
    console.log(`Total: $${total}`);

    console.log("\nGracias por su compra.");
}

module.exports = {

    agregarPedido,
    verPedidos,
    modificarPedido,
    eliminarPedido,
    calcularSubtotal,
    calcularIVA,
    calcularTotal,
    cobrar
};