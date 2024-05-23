import { Request, Response } from "express";
import User from "../models/User";

const getUser = async (req: Request, res: Response) => {
  const userId = req.user?._id;
  const user = await User.findById(userId, "name email role");

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

export { getUser };
