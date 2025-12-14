import { Router } from "express";
import locationsControllers from "../controllers/locations.controllers.js";

const router = Router();

// Ruta para crear: http://localhost:3000/api/locations/insertOne
router.post('/insertOne', locationsControllers.insertOne);

// Ruta para ver todo: http://localhost:3000/api/locations/getAll
router.get('/getAll', locationsControllers.getAll);

// Ruta para buscar por usuario: http://localhost:3000/api/locations/getByUser/juan@gmail.com
router.get('/getByUser/:email', locationsControllers.getAllByUser);

// Ruta para borrar: http://localhost:3000/api/locations/deleteOne/ID_DE_UBICACION
router.delete('/deleteOne/:location_id', locationsControllers.deleteOne);

export default router;