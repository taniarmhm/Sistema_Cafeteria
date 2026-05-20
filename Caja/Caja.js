let pedidos = [];

// Agregar pedido
function agregarPedido(producto) {
    pedidos.push(producto);
}

// Mostrar pedidos
function mostrarPedidos() {
    console.log("\n--- PEDIDOS ---");

    pedidos.forEach(producto => {
        console.log(`${producto.nombre} - $${producto.precio}`);
    });
}

// Calcular subtotal
function calcularSubtotal() {
    return pedidos.reduce((acc, producto) => {
        return acc + producto.precio;
    }, 0);
}

// Calcular IVA
function calcularIVA(subtotal) {
    return subtotal * 0.16;
}

// Calcular total
function calcularTotal() {
    const subtotal = calcularSubtotal();
    const iva = calcularIVA(subtotal);

    return subtotal + iva;
}

module.exports = {
    agregarPedido,
    mostrarPedidos,
    calcularSubtotal,
    calcularIVA,
    calcularTotal
};