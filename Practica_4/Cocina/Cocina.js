
const catalogo = [
    { id: 1, nombre: "Café Moka Chico", categoria: "Bebida", precio: 30 },
    { id: 2, nombre: "Café Moka Mediano", categoria: "Bebida", precio: 40 },
    { id: 3, nombre: "Café Moka Grande", categoria: "Bebida", precio: 55 },
    { id: 4, nombre: "Café Capuchino Chico", categoria: "Bebida", precio: 40 },
    { id: 5, nombre: "Café Capuchino Mediano", categoria: "Bebida", precio: 50 },
    { id: 6, nombre: "Café Capuchino Grande", categoria: "Bebida", precio: 65 },
    { id: 7, nombre: "Sincronizadas", categoria: "Comida", precio: 40 },
    { id: 8, nombre: "Sándwich de Pollo", categoria: "Comida", precio: 70 },
    { id: 9, nombre: "Galletas de Vainilla", categoria: "Postre", precio: 25 },
    { id: 10, nombre: "Pastel de Chocolate", categoria: "Postre", precio: 50 }
];

function buscarProductoPorID(id) {
    return catalogo.find(p => p.id === id);
}

// PROMESA CON ÉXITO O ERROR
function prepararPedido(pedido) {

    return new Promise((resolve, reject) => {

        console.log("\nCocina: recibiendo pedido...");

        setTimeout(() => {

            const fallo = Math.random() < 0.2; // 20% error

            if (fallo) {
                reject(" Cocina: faltan ingredientes, pedido cancelado");
                return;
            }

            console.log("Cocina: preparando " + pedido.producto.nombre);

            setTimeout(() => {
                console.log("Cocina: empacando pedido");

                setTimeout(() => {
                    console.log("Cocina: pedido listo");
                    resolve(pedido);
                }, 1500);

            }, 1500);

        }, 1500);
    });
}

module.exports = {
    catalogo,
    buscarProductoPorID,
    prepararPedido
};