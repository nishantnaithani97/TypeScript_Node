import { Router } from "express";
import UserController from "./controllers/userController";

const router = Router();

// console.log("--------in routes.ts file-----------");

router.route("/user/login").get(UserController.loginUser);
router.route("/user/register").post(UserController.registerUser);

export default router;