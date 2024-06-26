import mongoose, { Document, Schema } from "mongoose";
import { Roles } from "../constants";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  nationalID: string;
  password: string;
  role: string[];
  comparePassword: (enteredpassword: string) => boolean;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nationalID: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    required: true,
    default: [Roles.User],
  },
});

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function(enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
