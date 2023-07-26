import { Router } from "express";
import userController from "../controllers/userController.js"; // Modify the path according to your project structure

const userRouters = Router();

userRouters.post("/register", userController.registerUser);
userRouters.post("/login", userController.loginUser);

export default userRouters;
