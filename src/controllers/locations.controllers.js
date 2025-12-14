import locationsDaos from "../daos/locations.daos.js";

const locationsControllers = {};

locationsControllers.insertOne = (req, res) => {
    locationsDaos.insertOne(req.body)
        .then((newLocation) => {
            res.status(201).json({
                message: "Ubication created successfully",
                data: newLocation
            });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

locationsControllers.getAll = (req, res) => {
    locationsDaos.getAll()
        .then((locations) => {
            res.json({ data: locations });
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

locationsControllers.getAllByUser = (req, res) => {
    // Obtenemos el email de la URL
    const email = req.params.email; 

    locationsDaos.getAllByUser(email)
        .then((locations) => {
            if (locations.length > 0) {
                res.json({ data: locations });
            } else {
                res.status(404).json({ message: "No ubications found for this user email" });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

locationsControllers.deleteOne = (req, res) => {
    locationsDaos.deleteOne(req.params.location_id)
        .then((deleted) => {
            if (deleted) {
                res.json({ message: "Ubication deleted", data: deleted });
            } else {
                res.status(404).json({ message: "Ubication not found" });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        });
};

export default locationsControllers;