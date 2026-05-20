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


// FILTER → PRODUCTOS BARATOS

function productosBaratos() {

    return catalogo.filter(
        producto => producto.precio <= 40
    );
}


// FILTER → PRODUCTOS CAROS

function productosCaros() {

    return catalogo.filter(
        producto => producto.precio >= 50
    );
}


// FILTER → BEBIDAS

function buscarBebidas() {

    return catalogo.filter(
        producto => producto.categoria === "Bebida"
    );
}


// FILTER → POSTRES

function buscarPostres() {

    return catalogo.filter(
        producto => producto.categoria === "Postre"
    );
}


// FILTER → PRODUCTOS POR CATEGORÍA

function productosPorCategoria(categoria) {

    return catalogo.filter(
        producto => producto.categoria === categoria
    );
}


// FIND → BUSCAR PRODUCTO POR ID

function buscarProductoPorID(id) {

    return catalogo.find(
        producto => producto.id == id
    );
}


// FILTER → PRODUCTOS DISPONIBLES

function productosDisponibles() {

    return catalogo.filter(
        producto => producto.disponible
    );
}


// EXPORTAR

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