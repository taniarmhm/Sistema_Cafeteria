
const prompt = require("prompt-sync")();

const cocina = require("./Cocina/cocina");
const caja = require("./Caja/caja");
const cliente = require("./Cliente/cliente");

console.log(`
====================================
    CAFETERÍA "LA PAUSA PERFECTA"
====================================
`);

const nombre = prompt("Nombre del cliente: ");
console.log("Bienvenido " + nombre);

let opcionPrincipal;

do {

    console.log(`
====================================
        MENÚ PRINCIPAL
====================================

1. Módulo Cliente
2. Módulo Cocina
3. Módulo Caja
0. Salir
`);

    opcionPrincipal = Number(prompt("Opción: "));

    // ================= CLIENTE =================
    if (opcionPrincipal === 1) {

        let op;

        do {

            console.log(`
========== MÓDULO CLIENTE ==========

1. Ver catálogo
2. Hacer pedido (async)
3. Simular estados del pedido
0. Volver
`);

            op = Number(prompt("Opción cliente: "));

            switch (op) {

                case 1:
                    console.log("\nCATÁLOGO:\n");
                    cocina.catalogo.forEach(p =>
                        console.log(`${p.id}. ${p.nombre} - $${p.precio}`)
                    );
                    break;

                case 2: {

                    console.log("\nHACER PEDIDO:\n");

                    cocina.catalogo.forEach(p =>
                        console.log(`${p.id}. ${p.nombre} - $${p.precio}`)
                    );

                    const id = Number(prompt("\nID producto: "));
                    const cantidad = Number(prompt("Cantidad: "));

                    const pedido = cliente.hacerPedido(cocina, id, cantidad);

                    if (!pedido) break;

                    cocina.prepararPedido(pedido)
                        .then((p) => {
                            console.log("\nCliente: pedido listo desde cocina ✔");

                            let pedidos = [];

                            caja.agregarPedido(pedidos, p, (msg) => {
                                console.log("Caja:", msg);
                            });
                        })
                        .catch((err) => {
                            caja.notificar(null, "cancelado", (msg) => {
                                console.log(msg);
                            });

                            console.log(err);
                        });

                    break;
                }

                case 3: {

                    const id = Number(prompt("ID seguimiento: "));
                    const producto = cocina.buscarProductoPorID(id);

                    if (!producto) {
                        console.log("No existe el pedido");
                        break;
                    }

                    cliente.estadoPedido(nombre, { producto });

                    break;
                }
            }

        } while (op !== 0);
    }

    // ================= COCINA =================
    else if (opcionPrincipal === 2) {

        let op;

        do {

            console.log(`
========== MÓDULO COCINA ==========

1. Ver catálogo completo
2. Buscar bebidas
3. Buscar postres
4. Buscar comida
0. Volver
`);

            op = Number(prompt("Opción cocina: "));

            switch (op) {

                case 1:
                    cocina.catalogo.forEach(p =>
                        console.log(`${p.id}. ${p.nombre} - $${p.precio}`)
                    );
                    break;

                case 2:
                    cocina.buscarPorCategoria("Bebida")
                        .forEach(p => console.log(`${p.nombre} - $${p.precio}`));
                    break;

                case 3:
                    cocina.buscarPorCategoria("Postre")
                        .forEach(p => console.log(`${p.nombre} - $${p.precio}`));
                    break;

                case 4:
                    cocina.buscarPorCategoria("Comida")
                        .forEach(p => console.log(`${p.nombre} - $${p.precio}`));
                    break;
            }

        } while (op !== 0);
    }

    // ================= CAJA =================
    else if (opcionPrincipal === 3) {

        let pedidos = [];
        let op;

        do {

            console.log(`
========== MÓDULO CAJA ==========

1. Ver pedidos
2. Generar ticket (subtotal + IVA)
0. Volver
`);

            op = Number(prompt("Opción caja: "));

            switch (op) {

                case 1:
                    if (pedidos.length === 0) {
                        console.log("No hay pedidos");
                    } else {
                        pedidos.forEach(p =>
                            console.log(`${p.nombre} - $${p.precio}`)
                        );
                    }
                    break;

                case 2:
                    caja.generarTicket(pedidos);
                    break;
            }

        } while (op !== 0);
    }

} while (opcionPrincipal !== 0);

console.log("Gracias por su visita");