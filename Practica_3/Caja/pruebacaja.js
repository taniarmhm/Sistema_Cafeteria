const prompt = require("prompt-sync")();

const cocina = require("../Cocina/cocina");
const caja = require("./caja");

let opcion;
let nombreCliente;


// BIENVENIDA
console.log(`
====================================
              CAJA
====================================
`);


// CLIENTE
nombreCliente = prompt(
    "Nombre del cliente: "
);

console.log(`
Bienvenido/a ${nombreCliente}
`);


// CICLO
do {

    console.log(`
====================================
            OPCIONES
====================================

1. Ver menú
2. Agregar pedido
3. Ver ticket
0. Salir
`);

    opcion = Number(
        prompt("Seleccione una opción: ")
    );


    switch(opcion) {

        // VER MENÚ
        case 1:

            cocina.mostrarMenu();

        break;


        // AGREGAR PEDIDO
        case 2:

            cocina.mostrarMenu();

            const idProducto = Number(
                prompt("Ingrese ID del producto: ")
            );

            const producto =
                cocina.buscarProductoPorID(idProducto);

            if (producto) {

                caja.agregarPedido(
                    producto.nombre,
                    producto.precio
                );

            } else {

                console.log(`
Producto no encontrado.
`);

            }

        break;


        // VER TICKET
        case 3:

            console.log(`
====================================
              TICKET
====================================

Cliente: ${nombreCliente}

====================================
        PRODUCTOS PEDIDOS
====================================
`);

            caja.pedidos.forEach(pedido => {

                console.log(
`Producto: ${pedido.producto}
Precio: $${pedido.precio}
------------------------------------`
                );

            });


            // TOTALES
            const {

                subtotal,
                iva,
                total

            } = caja.calcularTotal();


            console.log(`
Subtotal: $${subtotal}

IVA: $${iva.toFixed(2)}

Total: $${total.toFixed(2)}

====================================
`);

        break;


        // SALIR
        case 0:

            console.log(`
====================================
       SALIENDO DE CAJA
====================================
`);

        break;


        // ERROR
        default:

            console.log(`
Opción inválida.
`);

    }

} while(opcion !== 0);