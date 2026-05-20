// ======================================
// MÓDULO CLIENTE
// ======================================

const prompt = require("prompt-sync")();

const {

    catalogo,
    productosBaratos,
    productosPorCategoria

} = require("../Cocina/Cocina");

const {

    agregarPedido,
    verPedidos,
    modificarPedido,
    eliminarPedido,
    cobrar,
    calcularTotal

} = require("../Caja/Caja");


// ======================================
// MOSTRAR CATÁLOGO
// map() + forEach()
// ======================================

function mostrarCatalogo() {

    console.log("\n==========================");
    console.log("      CAFETERÍA");
    console.log("==========================");

    // map() genera líneas dinámicas

    const lineas = catalogo.map((producto) => {

        return `${producto.id}. ${
            producto.disponible ? "✅" : "❌"
        } ${producto.nombre.padEnd(25)} $${producto.precio}`;
    });

    // forEach() imprime cada línea

    lineas.forEach(linea => {

        console.log(linea);

    });

    console.log("==========================");
}


// ======================================
// MOSTRAR PROMOCIONES
// map() + forEach()
// ======================================

function mostrarPromociones() {

    console.log("\n===== PROMOCIONES =====");

    const baratos = productosBaratos();

    // map() crea promociones

    const promos = baratos.map(producto => {

        return {

            nombre: producto.nombre,
            precioNormal: producto.precio,
            precioPromo: Math.round(
                producto.precio * 0.8
            )

        };
    });

    // forEach() muestra promociones

    promos.forEach(promo => {

        console.log(
            `${promo.nombre} | Antes: $${promo.precioNormal} | Ahora: $${promo.precioPromo}`
        );

    });
}


// ======================================
// MOSTRAR PRODUCTOS POR CATEGORÍA
// forEach()
// ======================================

function mostrarPorCategoria() {

    const categorias = [

        "Bebida",
        "Postre",
        "Comida"

    ];

    console.log("\n===== CATEGORÍAS =====");

    categorias.forEach(categoria => {

        console.log(`\n--- ${categoria} ---`);

        const productos = productosPorCategoria(
            categoria
        );

        productos.forEach(producto => {

            console.log(
                `${producto.nombre} - $${producto.precio}`
            );

        });
    });
}


// ======================================
// MENÚ PRINCIPAL
// ======================================

function menuPrincipal() {

    console.log("\n==============================");
    console.log("       MENÚ PRINCIPAL");
    console.log("==============================");

    console.log("1. Ver menú completo");
    console.log("2. Ver por categoría");
    console.log("3. Ver promociones");
    console.log("4. Agregar pedido");
    console.log("5. Ver pedidos");
    console.log("6. Modificar pedido");
    console.log("7. Eliminar pedido");
    console.log("8. Cobrar");
    console.log("0. Salir");

    console.log("==============================");

    const total = calcularTotal();

    if(total > 0){

        console.log(
            `Total actual: $${total}`
        );
    }
}


// ======================================
// SISTEMA
// ======================================

let opcion = -1;

while(opcion != 0){

    menuPrincipal();

    opcion = Number(
        prompt("Selecciona opción: ")
    );

    switch(opcion){

        case 1:

            mostrarCatalogo();
            break;

        case 2:

            mostrarPorCategoria();
            break;

        case 3:

            mostrarPromociones();
            break;

        case 4:

            mostrarCatalogo();

            let id = Number(
                prompt("ID del producto: ")
            );

            agregarPedido(id);

            break;

        case 5:

            verPedidos();
            break;

        case 6:

            modificarPedido();
            break;

        case 7:

            eliminarPedido();
            break;

        case 8:

            cobrar();
            break;

        case 0:

            console.log(
                "\nSistema finalizado."
            );

            break;

        default:

            console.log(
                "\nOpción inválida."
            );
    }
}