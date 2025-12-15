import { Router } from "express";
import geocodingControllers from "../controllers/geocode.controllers.js";
const router = Router();

router.get("/getLatlng/address=:destination&key=:API_KEY", geocodingControllers.getLatlng);

export default router;