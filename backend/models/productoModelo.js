import mongoose from "mongoose";

// Esquema
const EsquemaProductos = new mongoose.Schema(
    {
        titulo: {type: String, required: true, unique: true},
        marca: {type: String, required: true},
        categoria: {type: String, required: true},
        precio: {type: Number, required: true},
        puntuacion: {type: Number, required: true},
        imagen: {type: String, required: true}
    }, 
    { timestamps: true }
);

const Producto = mongoose.model('Producto', EsquemaProductos);

export default Producto;