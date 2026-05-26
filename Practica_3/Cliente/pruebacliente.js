const prompt = require("prompt-sync")();

const cliente = require("./cliente");

let opcion;


// BIENVENIDA
cliente.mostrarBienvenida();


// CICLO
do {

    console.log(`
====================================
         MÓDULO CLIENTE
====================================

1. Mostrar menú
2. Ver promociones
3. Productos disponibles
0. Salir
`);

    opcion = Number(
        prompt("Seleccione una opción: ")
    );


    switch(opcion) {

        // MOSTRAR MENÚ
        case 1:

            cliente.mostrarMenuCliente();

        break;


        // PROMOCIONES
        case 2:

            cliente.mostrarPromociones();

        break;


        // PRODUCTOS DISPONIBLES
        case 3:

            cliente.productosDisponibles();

        break;


        // SALIR
        case 0:

            cliente.mostrarDespedida();

        break;


        // ERROR
        default:

            console.log(`
Opción inválida.
`);

    }

} while(opcion !== 0);