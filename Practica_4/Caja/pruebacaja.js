const caja = require("./caja");

console.log("PRUEBA CAJA");

const producto = { id: 1, nombre: "Café Moka Chico", precio: 30 };

caja.agregarPedido(producto, (p) => {
    console.log("Callback ejecutado:", p.nombre);
});

caja.cancelarPedido(1, (err, eliminado) => {

    if (err) {
        console.log(err);
    } else {
        console.log("Pedido cancelado:", eliminado.nombre);
    }
});