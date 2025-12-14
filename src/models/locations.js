import { model, Schema } from "mongoose";

const locationSchema = new Schema({
    address: String,
    coordinates: {
        lat: Number,
        lng: Number
    },
    //* Guardamos el correo del usuario
    user_email: { 
        type: String, 
        required: true 
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('location', locationSchema);