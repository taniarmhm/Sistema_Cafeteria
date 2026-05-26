const prompt = require("prompt-sync")();

const cocina = require("./cocina");

let opcion;


do {

    console.log(`
====================================
         MÓDULO COCINA
====================================

1. Mostrar catálogo
2. Productos baratos
3. Productos caros
4. Bebidas
5. Postres
6. Comida
0. Salir
`);

    opcion = Number(
        prompt("Seleccione una opción: ")
    );


    switch(opcion) {

        // MOSTRAR CATÁLOGO
        case 1:

            cocina.mostrarMenu();

        break;


        // PRODUCTOS BARATOS
        case 2:

            console.log(`
====================================
      PRODUCTOS BARATOS
====================================
`);

            cocina.productosBaratos()
            .forEach(producto => {

                console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Precio: $${producto.precio}
------------------------------------`
                );

            });

        break;


        // PRODUCTOS CAROS
        case 3:

            console.log(`
====================================
       PRODUCTOS CAROS
====================================
`);

            cocina.productosCaros()
            .forEach(producto => {

                console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Precio: $${producto.precio}
------------------------------------`
                );

            });

        break;


        // BEBIDAS
        case 4:

            console.log(`
====================================
            BEBIDAS
====================================
`);

            cocina.buscarBebidas()
            .forEach(producto => {

                console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Precio: $${producto.precio}
------------------------------------`
                );

            });

        break;


        // POSTRES
        case 5:

            console.log(`
====================================
            POSTRES
====================================
`);

            cocina.buscarPostres()
            .forEach(producto => {

                console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Precio: $${producto.precio}
------------------------------------`
                );

            });

        break;


        // COMIDA
        case 6:

            console.log(`
====================================
             COMIDA
====================================
`);

            cocina.buscarComida()
            .forEach(producto => {

                console.log(
`ID: ${producto.id}
Producto: ${producto.nombre}
Precio: $${producto.precio}
------------------------------------`
                );

            });

        break;


        // SALIR
        case 0:

            console.log(`
====================================
      SALIENDO DE COCINA
====================================
`);

        break;


        
        default:

            console.log(`
Opción inválida.
`);

    }

} while(opcion !== 0);