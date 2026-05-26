// ===============================
// MÓDULO CLIENTE
// ===============================

function mostrarMenuCliente() {
    console.log(`
====================================
    CAFETERÍA "LA PAUSA PERFECTA"
====================================

MENU DINÁMICO
Elige lo que quieres consultar:

- Bebidas desde $30
- Comidas desde $40
- Postres desde $25

Usa el módulo Cocina para ver productos completos
`);
}

function mostrarPromociones() {
    console.log(`
====================================
        PROMOCIONES
====================================

2x1 en Café Capuchino chico
10% descuento en postres
Combo sandwich + café: $90

Válido por tiempo limitado
`);
}

function productosDisponibles() {
    console.log(`
====================================
      PRODUCTOS DISPONIBLES
====================================

Bebidas calientes
Comidas rápidas
Postres caseros

Todos los productos se consultan en Cocina
`);
}

function mostrarDespedida() {
    console.log(`
====================================
        GRACIAS POR SU VISITA
====================================
Vuelva pronto
`);
}

module.exports = {
    mostrarMenuCliente,
    mostrarPromociones,
    productosDisponibles,
    mostrarDespedida
};