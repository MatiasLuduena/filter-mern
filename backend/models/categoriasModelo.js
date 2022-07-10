import mongoose from "mongoose";

const EsquemaCategorias = new mongoose.Schema(
    {
        label: {type: String, required: true, unique: true},
        valor: {type: String, required: true, unique: true}
    },
    { timestamps: true }
);

const Categorias = mongoose.model('Categorias', EsquemaCategorias);
export default Categorias;