import { model, Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,   
        lowercase: true 
    },
    name: String,
    lastname: String,
    password: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('users_model', userSchema);