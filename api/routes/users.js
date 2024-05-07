import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("Login completed successfully")
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("Login completed successfully, you can delete your account")
})

//Update
router.put("/:id", updateUser)

//Delete
router.delete("/:id", deleteUser)

//Get
router.get("/:id", getUser)

//Get All
router.get("/", getUsers)

export default router