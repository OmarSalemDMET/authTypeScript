import express from "express";
import {
  registerUser,
  authenticUser,
  logoutUser,
} from "../controllers/authController";
import { displayInfo, registerInfo, getMarriedInfo } from "../api/regInfo";

const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/Login", authenticUser);
router.post("/api/logout", logoutUser);
router.post("/api/regInfo", registerInfo );
router.post("/api/dispInfo", displayInfo);
router.get("/api/getMarriedInfo", getMarriedInfo);

export default router;
