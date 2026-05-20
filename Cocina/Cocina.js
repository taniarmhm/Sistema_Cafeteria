const productos = [
    // ===== BEBIDAS =====
    { id: 1, nombre: "Café Moka Chico", categoria: "Bebida", precio: 30, porcion: "250 ml" },
    { id: 2, nombre: "Café MokaMediano", categoria: "Bebida", precio: 40, porcion: "500 ml" },
    { id: 3, nombre: "Café Moka Grande", categoria: "Bebida", precio: 55, porcion: "800 ml" },

    { id: 4, nombre: "Café Capuchino Chico", categoria: "Bebida", precio: 40, porcion: "250 ml" },
    { id: 5, nombre: "Café Capuchino Mediano", categoria: "Bebida", precio: 50, porcion: "500 ml" },
    { id: 6, nombre: "Café Capuchino Grande", categoria: "Bebida", precio: 65, porcion: "800 ml" },

    // ===== COMIDA =====
    { id: 7, nombre: "Sincronizadas", categoria: "Comida", precio: 40, porcion: "2 piezas" },
    { id: 8, nombre: "Sándwich de Pollo", categoria: "Comida", precio: 70, porcion: "1 unidad" },

    // ===== POSTRES =====
    { id: 9, nombre: "Galletas de vainilla", categoria: "Postre", precio: 25, porcion: "Paquete de 4" },
    { id: 10, nombre: "Pastel de chocolate", categoria: "Postre", precio: 50, porcion: "1 rebanada" }
];

function mostrarMenu() {
    console.log("\n===== MENÚ =====");

    productos.forEach(p => {
        console.log(`${p.id}. ${p.nombre} | $${p.precio} | ${p.categoria} | ${p.porcion}`);
    });
}

function buscarProducto(id) {
    const producto = productos.find(p => p.id === id);

    if (!producto) return "Producto no encontrado";

    return `${producto.id}. ${producto.nombre} | $${producto.precio} | ${producto.categoria} | ${producto.porcion}`;
}

function productosBaratos() {
    return productos.filter(p => p.precio <= 30);
}

function productosCaros() {
    return productos.filter(p => p.precio >= 45);
}

function buscarBebidas() {
    return productos.filter(p => p.categoria === "Bebida");
}

function buscarPostres() {
    return productos.filter(p => p.categoria === "Postre");
}

function buscarComida() {
    return productos.filter(p => p.categoria === "Comida");
}

module.exports = {
    mostrarMenu,
    buscarProducto,
    productosBaratos,
    productosCaros,
    buscarBebidas,
    buscarPostres,
    buscarComida
};