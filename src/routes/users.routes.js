import {Router} from "express";
import usersControllers from "../controllers/users.controllers.js";

const router = Router();

//rutas 
router.get('/getAll',usersControllers.getAll);
router.get('/getOne/:user_id',usersControllers.getOne);
router.post('/insertOne',usersControllers.insertOne);
router.put('/updateOne/:user_id',usersControllers.updateOne);
router.delete('/deleteOne/:user_id',usersControllers.deleteOne);
router.post('/login', usersControllers.login);


export default router;