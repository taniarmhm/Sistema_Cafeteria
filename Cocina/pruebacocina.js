const readline = require("readline");
const cocina = require("./cocina");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n========================");
    console.log("     MÓDULO COCINA");
    console.log("========================");
    console.log("1. Mostrar menú");
    console.log("2. Buscar producto por ID");
    console.log("3. Productos baratos");
    console.log("4. Productos caros");
    console.log("5. Bebidas");
    console.log("6. Postres");
    console.log("7. Comida");
    console.log("0. Salir");

    rl.question("\nSelecciona una opción: ", opcion => {

        switch (opcion) {

            case "1":
                cocina.mostrarMenu();
                menu();
                break;

            case "2":
                rl.question("Ingresa ID del producto: ", id => {
                    console.log(cocina.buscarProducto(Number(id)));
                    menu();
                });
                break;

            case "3":
                console.log("\n===== PRODUCTOS BARATOS =====");
                cocina.productosBaratos().forEach(p => {
                    console.log(`${p.id}. ${p.nombre} | $${p.precio} | ${p.porcion}`);
                });
                menu();
                break;

            case "4":
                console.log("\n===== PRODUCTOS CAROS =====");
                cocina.productosCaros().forEach(p => {
                    console.log(`${p.id}. ${p.nombre} | $${p.precio} | ${p.porcion}`);
                });
                menu();
                break;

            case "5":
                console.log("\n===== BEBIDAS =====");
                cocina.buscarBebidas().forEach(p => {
                    console.log(`${p.id}. ${p.nombre} | $${p.precio} | ${p.porcion}`);
                });
                menu();
                break;

            case "6":
                console.log("\n===== POSTRES =====");
                cocina.buscarPostres().forEach(p => {
                    console.log(`${p.id}. ${p.nombre} | $${p.precio} | ${p.porcion}`);
                });
                menu();
                break;

            case "7":
                console.log("\n===== COMIDA =====");
                cocina.buscarComida().forEach(p => {
                    console.log(`${p.id}. ${p.nombre} | $${p.precio} | ${p.porcion}`);
                });
                menu();
                break;

            case "0":
                console.log("Saliendo...");
                rl.close();
                break;

            default:
                console.log("Opción no válida");
                menu();
        }
    });
}

menu();