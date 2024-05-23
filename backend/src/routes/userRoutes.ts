import express from "express";
import { getUser } from "../controllers/userControllers";
import { authenticate } from "../middleware/authMiddleware";
import {
  displayInfo,
  registerInfo,
  getMarriedInfo,
  getFemaleRegs,
  getMaleRegs,
} from "../api/regInfo";
const router = express.Router();

router.get("/:id", authenticate, getUser);
router.get("/dispInfo", authenticate, displayInfo);
router.get("/api/getMarriedInfo", authenticate, getMarriedInfo);
router.get("/api/countMale", authenticate, getMaleRegs);
router.get("/api/countFemale", authenticate, getFemaleRegs);
export default router;
