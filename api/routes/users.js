import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Login completed successfully")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("Hello User! Login completed successfully, you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello Admin! Login completed successfully, you can delete all accounts")
// })

//Update
router.put("/:id", verifyUser, updateUser)

//Delete
router.delete("/:id", verifyUser, deleteUser)

//Get
router.get("/:id", verifyUser, getUser)

//Get All
router.get("/", verifyAdmin, getUsers)

export default router