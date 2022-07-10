// Insertar data.js en MongoDB

import express from "express";

// modelos
import Categorias from "../models/categoriasModelo.js";
import Marca from "../models/marcaModelo.js";
import Producto from "../models/productoModelo.js";
import Puntuacion from "../models/puntuacionModelo.js";

// data
import { categorias, marcas, productos, puntuacion } from "../data.js";

const router = express.Router();

router.get('/', async (req, res) => {
    await Categorias.remove({});
    const createCategorias = await Categorias.insertMany(categorias);

    await Marca.remove({});
    const createMarcas = await Marca.insertMany(marcas);

    await Producto.remove({});
    const createProductos = await Producto.insertMany(productos);

    await Puntuacion.remove({});
    const createPuntuaciones = await Puntuacion.insertMany(puntuacion);

    res.send({ createCategorias, createMarcas, createProductos, createPuntuaciones });
});

export default router;