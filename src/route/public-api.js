import express from "express";
import userController from "../controller/user-controller.js";

const publicRputer = new express.Router();
publicRputer.post("/api/users", userController.register);

export { publicRputer };
