import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel)

//Update
router.put("/:id", verifyAdmin, updateHotel)

//Delete
router.delete("/:id", verifyAdmin, deleteHotel)

//Get
router.get("/find/:id", getHotel)

//Get All
router.get("/", getHotels)

//count by city 
router.get("/countByCity", countByCity)

//count by type 
router.get("/countByType", getHotels)

export default router