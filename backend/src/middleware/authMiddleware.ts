import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";
import asyncHandler from "express-async-handler";
import { AuthenticationError } from "./errorMiddleware";
require("dotenv").config();

interface UserBasicInfo {
  _id: string;
  name: string;
  email: string;
  role: string[]; // Updated to string[]
}

declare global {
  namespace Express {
    interface Request {
      user?: UserBasicInfo | null;
    }
  }
}

const authenticate = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      throw new AuthenticationError("Token not found");
    }

    const jwtSecret = process.env.JWT_SECRET || "";
    const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

    if (!decoded || !decoded.userId) {
      throw new AuthenticationError("UserId not found");
    }

    const user = await User.findById(decoded.userId, "_id name email role");

    if (!user) {
      throw new AuthenticationError("User not found");
    }

    req.user = user as UserBasicInfo; // Ensure it matches the interface
    next();
  } catch (e) {
    throw new AuthenticationError("Invalid token");
  }
});

const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role.some(role => roles.includes(role))) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

export { authenticate, authorize };
