const prompt = require("prompt-sync")();

const cliente = require("./Cliente/cliente");
const cocina = require("./Cocina/cocina");
const caja = require("./Caja/caja");

let opcion;
let nombreCliente;

console.log(`
====================================
    SISTEMA CAFETERÍA
====================================
`);

nombreCliente = prompt("Nombre del cliente: ");

console.log(`\nBienvenido/a ${nombreCliente}\n`);

do {

    console.log(`
====================================
        MENÚ PRINCIPAL
====================================

1. Cliente
2. Cocina
3. Caja
0. Salir
`);

    opcion = Number(prompt("Seleccione opción: "));

    switch (opcion) {

        // CLIENTE
        case 1:
            cliente.mostrarMenuCliente();
            cliente.mostrarPromociones();
            cliente.productosDisponibles();
            break;

        // COCINA
        case 2:

            let opCocina;

            do {

                console.log(`
====================================
          MÓDULO COCINA
====================================

1. Catálogo
2. Baratos
3. Caros
4. Bebidas
5. Postres
6. Comida
0. Volver
`);

                opCocina = Number(prompt("Opción: "));

                switch (opCocina) {

                    case 1:
                        cocina.mostrarMenu();
                        break;

                    case 2:
                        cocina.productosBaratos().forEach(p => console.log(p));
                        break;

                    case 3:
                        cocina.productosCaros().forEach(p => console.log(p));
                        break;

                    case 4:
                        cocina.buscarBebidas().forEach(p => console.log(p));
                        break;

                    case 5:
                        cocina.buscarPostres().forEach(p => console.log(p));
                        break;

                    case 6:
                        cocina.buscarComida().forEach(p => console.log(p));
                        break;
                }

            } while (opCocina !== 0);

            break;

        // CAJA
        case 3:

            let opCaja;

            do {

                console.log(`
====================================
          MÓDULO CAJA
====================================

1. Agregar pedido
2. Ver ticket
0. Volver
`);

                opCaja = Number(prompt("Opción: "));

                switch (opCaja) {

                    case 1:
                        cocina.mostrarMenu();

                        const id = Number(prompt("ID producto: "));
                        const producto = cocina.buscarProductoPorID(id);

                        if (producto) {
                            caja.agregarPedido(producto.nombre, producto.precio);
                        }
                        break;

                    case 2:

                        console.log(`
====================================
              TICKET
====================================

Cliente: ${nombreCliente}
`);

                        caja.pedidos.forEach(p => {
                            console.log(`${p.producto} - $${p.precio}`);
                        });

                        const { subtotal, iva, total } = caja.calcularTotal();

                        console.log(`
Subtotal: $${subtotal}
IVA: $${iva.toFixed(2)}
Total: $${total.toFixed(2)}
`);
                        break;
                }

            } while (opCaja !== 0);

            break;

        case 0:
            cliente.mostrarDespedida();
            break;
    }

} while (opcion !== 0);