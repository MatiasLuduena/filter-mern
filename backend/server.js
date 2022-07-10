import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Conección a MongoDB
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Conectado correctamente a MongoDB');
}).catch((error) => {
    console.log('No se pudo conectar con MongoDB, ERROR:', error.message);
});

// Express
const app = express();

// Rutas
import dataRutas from "./routes/dataRutas.js";

app.use('/api/data', dataRutas);

import { categorias, marcas, productos, puntuacion } from "./data.js";

app.get('/api/productos', (req, res) => {
    res.send(productos);
});

app.get('/api/categorias', (req, res) => {
    res.send(categorias);
});

app.get('/api/marcas', (req, res) => {
    res.send(marcas);
});

app.get('/api/puntuacion', (req, res) => {
    res.send(puntuacion);
});

const puerto = process.env.PUERTO || 5000;

app.listen(puerto, () => {
    console.log(`Servidor funcionando en http://localhost:${puerto}`);
});