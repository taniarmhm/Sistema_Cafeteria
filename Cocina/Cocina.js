// ======================================
// MÓDULO COCINA
// ======================================

const catalogo = [

{
    id: 1,
    nombre: "Café Cappuccino",
    categoria: "Bebida",
    precio: 35,
    disponible: true
},

{
    id: 2,
    nombre: "Café Americano",
    categoria: "Bebida",
    precio: 40,
    disponible: true
},

{
    id: 3,
    nombre: "Pastel de chocolate",
    categoria: "Postre",
    precio: 50,
    disponible: true
},

{
    id: 4,
    nombre: "Galletas de mantequilla",
    categoria: "Postre",
    precio: 35,
    disponible: false
},

{
    id: 5,
    nombre: "Sándwich de pollo",
    categoria: "Comida",
    precio: 55,
    disponible: true
},

{
    id: 6,
    nombre: "Sincronizadas",
    categoria: "Comida",
    precio: 45,
    disponible: true
}

];

// FILTER → baratos
function productosBaratos() {

    return catalogo.filter(
        producto => producto.precio <= 40
    );
}

// FILTER → caros
function productosCaros() {

    return catalogo.filter(
        producto => producto.precio >= 50
    );
}

// FILTER → bebidas
function buscarBebidas() {

    return catalogo.filter(
        producto => producto.categoria === "Bebida"
    );
}

// FILTER → postres
function buscarPostres() {

    return catalogo.filter(
        producto => producto.categoria === "Postre"
    );
}

// FILTER → categoría
function productosPorCategoria(categoria) {

    return catalogo.filter(
        producto => producto.categoria === categoria
    );
}

// FIND → buscar por ID
function buscarProductoPorID(id) {

    return catalogo.find(
        producto => producto.id == id
    );
}

// FILTER → disponibles
function productosDisponibles() {

    return catalogo.filter(
        producto => producto.disponible
    );
}

module.exports = {

    catalogo,
    productosBaratos,
    productosCaros,
    buscarBebidas,
    buscarPostres,
    productosPorCategoria,
    buscarProductoPorID,
    productosDisponibles
};