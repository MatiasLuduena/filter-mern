import mongoose from "mongoose";

const EsquemaPuntuacion = new mongoose.Schema(
    {
        valor: {type: String, required: true, unique: true},
        label: {type: String, required: true, unique: true}
    },
    { timestamps: true }
);

const Puntuacion = mongoose.model('Puntuacion', EsquemaPuntuacion);

export default Puntuacion;