import Location from "../models/locations.js"; 

const locationsDaos = {};

//* Insertar
locationsDaos.insertOne = async (locationData) => {
    
    const newLocation = await Location.create(locationData);
    return newLocation;
};

//* Obtener TODAS las ubicaciones
locationsDaos.getAll = async () => {
    const locations = await Location.find();
    return locations;
};

//* Obtener POR USUARIO (Usando el correo)
locationsDaos.getAllByUser = async (email) => {
    // Busca todas las ubicaciones donde user_email coincida
    const locations = await Location.find({ user_email: email });
    return locations;
};

//* Eliminar una ubicación por su ID
locationsDaos.deleteOne = async (location_id) => {
    const deletedLocation = await Location.findByIdAndDelete(location_id);
    return deletedLocation;
};

export default locationsDaos;