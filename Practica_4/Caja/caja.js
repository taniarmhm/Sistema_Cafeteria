
function agregarPedido(pedidos, pedido, callback) {

    for (let i = 0; i < pedido.cantidad; i++) {
        pedidos.push(pedido.producto);
    }

    // CALLBACK
    callback(pedido);
}

// NOTIFICACIÓN DE ESTADO
function notificar(pedido, estado, callback) {

    if (estado === "listo") {
        callback(`✔ Caja: pedido listo de ${pedido.producto.nombre}`);
    }

    if (estado === "cancelado") {
        callback(`Caja: pedido cancelado`);
    }
}

function generarTicket(pedidos) {

    console.log("\n========== TICKET ==========\n");

    if (pedidos.length === 0) {
        console.log("Sin pedidos");
        return;
    }

    pedidos.forEach(p =>
        console.log(`${p.nombre} - $${p.precio}`)
    );

    const subtotal = pedidos.reduce((a, p) => a + p.precio, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    console.log("\n--------------------");
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`IVA: $${iva.toFixed(2)}`);
    console.log(`TOTAL: $${total.toFixed(2)}`);
}

module.exports = {
    agregarPedido,
    notificar,
    generarTicket
};