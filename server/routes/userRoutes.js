import express from "express";
import {
  addUser,
  getUserByNameAndPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/adduser", addUser);
router.post("/getuser", getUserByNameAndPassword);

export default router;
