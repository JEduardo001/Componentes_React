import React from 'react';
import bici from '../images/bici.jpg';

function Productos() {
    const productos = crearProductos();

   return (
        <div className="productos-container">
            {productos.map(producto => (
                <div key={producto.id} className="producto">
                    <img src={bici} alt="imagen no encontrada" />
                    <h3 className="producto-nombre">{producto.nombre}</h3>
                    <p className="producto-precio">${producto.precio}</p>
                    <button className="agregar-carrito">Agregar al carrito</button>
                </div>
            ))}
        </div>
    );
}

function crearProductos() {
      const productos = [];
    for (let i = 1; i <= 14; i++) {
        productos.push({
            id: i,
            nombre: `Producto ${i}`,
            precio: 100, 
            imagen: `imagen${i}.jpg`
        });
    }
    return productos;
}

export default Productos;
