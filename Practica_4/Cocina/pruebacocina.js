const cocina = require("./cocina");

console.log("PRUEBA COCINA");

cocina.mostrarCatalogo();

cocina.prepararProducto(1)
    .then(res => {
        console.log("RESULTADO:", res.nombre);
    })
    .catch(err => {
        console.log("ERROR:", err);
    });