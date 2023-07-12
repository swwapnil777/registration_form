// web.js
import express from "express";
import userController from "../controller/userController.js";
const router = express.Router();

router.get("/", userController.home);
router.get("/registration", userController.registration);
router.post("/registration", userController.creatUserDoc);
router.get("/login", userController.login);
router.post("/login", userController.varifyLogin);
router.get("/dashboard",userController.dashBoard)

export default router;
