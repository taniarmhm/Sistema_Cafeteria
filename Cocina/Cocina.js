
// ======================================
// MÓDULO COCINA - CATÁLOGO
// ======================================

const catalogo = [
    // ===== BEBIDAS =====
    { id: 1, nombre: "Café Moka Chico", categoria: "Bebida", precio: 30, porcion: "250 ml", disponible: true },
    { id: 2, nombre: "Café Moka Mediano", categoria: "Bebida", precio: 40, porcion: "500 ml", disponible: true },
    { id: 3, nombre: "Café Moka Grande", categoria: "Bebida", precio: 55, porcion: "800 ml", disponible: true },

    { id: 4, nombre: "Café Capuchino Chico", categoria: "Bebida", precio: 40, porcion: "250 ml", disponible: true },
    { id: 5, nombre: "Café Capuchino Mediano", categoria: "Bebida", precio: 50, porcion: "500 ml", disponible: true },
    { id: 6, nombre: "Café Capuchino Grande", categoria: "Bebida", precio: 65, porcion: "800 ml", disponible: true },

    // ===== COMIDA =====
    { id: 7, nombre: "Sincronizadas", categoria: "Comida", precio: 40, porcion: "2 piezas", disponible: true },
    { id: 8, nombre: "Sándwich de Pollo", categoria: "Comida", precio: 70, porcion: "1 unidad", disponible: true },

    // ===== POSTRES =====
    { id: 9, nombre: "Galletas de vainilla", categoria: "Postre", precio: 25, porcion: "Paquete de 4", disponible: false },
    { id: 10, nombre: "Pastel de chocolate", categoria: "Postre", precio: 50, porcion: "1 rebanada", disponible: true }
];


// ==========================
// FUNCIONES
// ==========================

// PRODUCTOS BARATOS
function productosBaratos() {
    return catalogo.filter(p => p.precio <= 40);
}

// PRODUCTOS CAROS
function productosCaros() {
    return catalogo.filter(p => p.precio >= 50);
}

// BEBIDAS
function buscarBebidas() {
    return catalogo.filter(p => p.categoria === "Bebida");
}

// POSTRES
function buscarPostres() {
    return catalogo.filter(p => p.categoria === "Postre");
}

// COMIDA
function buscarComida() {
    return catalogo.filter(p => p.categoria === "Comida");
}

// POR CATEGORÍA
function productosPorCategoria(categoria) {
    return catalogo.filter(p => p.categoria === categoria);
}

// BUSCAR POR ID
function buscarProductoPorID(id) {
    return catalogo.find(p => p.id == id);
}

// DISPONIBLES
function productosDisponibles() {
    return catalogo.filter(p => p.disponible);
}


// ==========================
// EXPORTAR
// ==========================
module.exports = {
    catalogo,
    productosBaratos,
    productosCaros,
    buscarBebidas,
    buscarPostres,
    buscarComida,
    productosPorCategoria,
    buscarProductoPorID,
    productosDisponibles
};