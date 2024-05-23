import express from "express";
import authRouter from "./routes/authRoutes";
import userRouter from "./routes/userRoutes";
import connectUserDB from "./connections/UserDB";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { authenticate } from "./middleware/authMiddleware";
import { errorHandler } from "./middleware/errorMiddleware";
import cors from "cors";

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

const app = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Replace with your frontend URL
  }),
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRouter);
app.use("/users", authenticate, userRouter);

app.use(errorHandler);

connectUserDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
