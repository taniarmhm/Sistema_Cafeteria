function hacerPedido(cocina, id, cantidad) {

    const producto = cocina.buscarProductoPorID(id);

    if (!producto) {
        console.log("Producto no encontrado");
        return null;
    }

    return {
        producto,
        cantidad
    };
}

function estadoPedido(nombre, pedido) {

    console.log("\nPedido recibido ✔");

    setTimeout(() => {
        console.log("Preparando pedido...");

        setTimeout(() => {
            console.log("Empacando pedido...");

            setTimeout(() => {
                console.log(`Pedido entregado a ${nombre} `);
            }, 2000);

        }, 2000);

    }, 2000);
}

module.exports = {
    hacerPedido,
    estadoPedido
};