import express from "express";
import { Login, Logout, Register } from "../controllers/Auth.controller.js";
import { authenticate } from "../middleware/authenticate.js";

const AuthRoute = express.Router();

AuthRoute.post("/register", Register);
AuthRoute.post("/login", Login);
AuthRoute.get("/logout", authenticate, Logout);

export default AuthRoute;
