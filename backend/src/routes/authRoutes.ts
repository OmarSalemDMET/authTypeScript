import express from "express";
import {
  registerUser,
  authenticUser,
  logoutUser,
} from "../controllers/authController";
import {
  displayInfo,
  registerInfo,
  getMarriedInfo,
  getFemaleRegs,
  getMaleRegs,
} from "../api/regInfo";

const router = express.Router();

router.post("/api/register", registerUser);
router.post("/api/Login", authenticUser);
router.post("/api/logout", logoutUser);
router.post("/api/regInfo", registerInfo);
router.get("/api/dispInfo", displayInfo);
router.get("/api/getMarriedInfo", getMarriedInfo);
router.get("/api/countMale", getMaleRegs);
router.get("/api/countFemale", getFemaleRegs);

export default router;
