import { Request, Response } from "express";
import User from "../models/User";
import { generateToken, clearToken } from "../utils/auth";

const registerUser = async (req: Request, res: Response) => {
  const { name, email, nationalID, password, role } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "The user already exists!" });
  }

  const user = await User.create({ name, email, nationalID, password, role });

  if (user) {
    generateToken(res, user._id.toString());
    res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role });
  } else {
    res.status(400).json({ message: "An error occurred in creating the user" });
  }
};

const authenticUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    const tokenID =  generateToken(res, user._id.toString());
    res.status(201).json({ id: user._id, name: user.name, email: user.email, role: user.role[0], token: tokenID });
  } else {
    res.status(401).json({ message: "User not found / password incorrect" });
  }
};

const logoutUser = (req: Request, res: Response) => {
  clearToken(res);
  res.status(200).json({ message: "User Logged out" });
};

export { registerUser, authenticUser, logoutUser };
