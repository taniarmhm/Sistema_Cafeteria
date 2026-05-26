
const pedidos = [];

function agregarPedido(producto, precio) {
    pedidos.push({ producto, precio });
    console.log(`
✔ Producto agregado: ${producto} - $${precio}
`);
}

function calcularTotal() {
    const subtotal = pedidos.reduce((acc, p) => acc + p.precio, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    return { subtotal, iva, total };
}

module.exports = {
    pedidos,
    agregarPedido,
    calcularTotal
};