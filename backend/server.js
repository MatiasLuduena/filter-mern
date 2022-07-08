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

const puerto = process.env.PUERTO || 5000;

app.listen(puerto, () => {
    console.log(`Servidor funcionando en http://localhost:${puerto}`);
});