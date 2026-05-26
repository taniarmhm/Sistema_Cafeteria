const pedidos = [];

// Agregar pedidos
function agregarPedido(producto, precio) {

    pedidos.push({
        producto,
        precio
    });

    console.log(`
Producto agregado correctamente.
`);

}

// Mostrar pedidos
function mostrarPedidos() {

    console.log(`
====================================
             PEDIDOS
====================================
`);

    pedidos.forEach(pedido => {

        console.log(
`Producto: ${pedido.producto}
Precio: $${pedido.precio}
------------------------------------`
        );

    });

}

// Total acumulado
function totalAcumulado() {

    let total = 0;

    pedidos.forEach(pedido => {

        total += pedido.precio;

    });

    return total;

}

module.exports = {

    pedidos,
    agregarPedido,
    mostrarPedidos,
    totalAcumulado

};