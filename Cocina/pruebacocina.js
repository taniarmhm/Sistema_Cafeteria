const prompt = require("prompt-sync")();

const cocina = require("./cocina");

let opcion = -1;


// FUNCIÓN PARA MOSTRAR PRODUCTOS

function mostrarProductos(lista){

    if(lista.length === 0){

        console.log("No hay productos.");
        return;
    }

    console.log("\n==============================");

    lista.forEach(producto => {

        console.log(
            `${producto.id}. ${producto.nombre} - $${producto.precio} - ${producto.categoria}`
        );
    });

    console.log("==============================");
}


// MENÚ PRINCIPAL

while(opcion != 0){

    console.log("\n========================");
    console.log("     MÓDULO COCINA");
    console.log("========================");
    console.log("1. Mostrar catálogo");
    console.log("2. Buscar producto por ID");
    console.log("3. Mostrar productos baratos");
    console.log("4. Mostrar productos caros");
    console.log("5. Mostrar bebidas");
    console.log("6. Mostrar postres");
    console.log("0. Salir");

    opcion = Number(
        prompt("Selecciona opción: ")
    );


    switch(opcion){

        // MOSTRAR CATÁLOGO

        case 1:

            cocina.mostrarMenu();

            break;


        // BUSCAR PRODUCTO POR ID

        case 2:

            let id = Number(
                prompt("Ingresa ID del producto: ")
            );

            let producto =
                cocina.buscarProducto(id);

            if(producto){

                console.log("\n===== PRODUCTO =====");

                console.log(
                    `${producto.id}. ${producto.nombre} - $${producto.precio} - ${producto.categoria}`
                );
            }

            else{

                console.log(
                    "Producto no encontrado."
                );
            }

            break;


        // PRODUCTOS BARATOS

        case 3:

            console.log(
                "\n===== PRODUCTOS BARATOS ====="
            );

            mostrarProductos(
                cocina.productosBaratos()
            );

            break;


        // PRODUCTOS CAROS

        case 4:

            console.log(
                "\n===== PRODUCTOS CAROS ====="
            );

            mostrarProductos(
                cocina.productosCaros()
            );

            break;


        // BEBIDAS

        case 5:

            console.log("\n===== BEBIDAS =====");

            mostrarProductos(
                cocina.buscarBebidas()
            );

            break;


        // POSTRES

        case 6:

            console.log("\n===== POSTRES =====");

            mostrarProductos(
                cocina.buscarPostres()
            );

            break;


        // SALIR

        case 0:

            console.log("Sistema cerrado.");

            break;


        default:

            console.log("Opción inválida.");
    }
}