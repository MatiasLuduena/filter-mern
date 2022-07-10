import mongoose from "mongoose";

const EsquemaMarca = new mongoose.Schema(
    {
        checked: {type: Boolean, default: false, required: true},
        label: {type: String, required: true, unique: true}
    },
    { timestamps: true }
);

const Marca = mongoose.model('Marca', EsquemaMarca);
export default Marca;