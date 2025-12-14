import users from "../models/users.js";
const usersDaos = {};

usersDaos.getAll = async () => {
    const user = await users.find();
    return user;
};

usersDaos.getOne = async (user_id) => {
    const user = await users.findById(user_id);
    return user;
};

usersDaos.insertOne = async (userData) => {
    const newUser = await users.create(userData);
    return newUser;
};

usersDaos.updateOne = async (user_id, userData) => {
    const updatedUser = await users.findByIdAndUpdate(
        user_id, 
        userData, 
        { new: true } // Esto asegura que te devuelva el usuario ya actualizado
    );
    return updatedUser;
};

usersDaos.deleteOne = async (user_id) => {
    const deletedUser = await users.findByIdAndDelete(user_id);
    return deletedUser;
};

usersDaos.login = async (email, password) => {
    // Busca un usuario que coincida en AMBOS campos
    const user = await users.findOne({ email: email, password: password });
    return user;
};

export default usersDaos;