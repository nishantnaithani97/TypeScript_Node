"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./controllers/userController"));
const router = express_1.Router();
// console.log("--------in routes.ts file-----------");
router.route("/user/login").get(userController_1.default.loginUser);
router.route("/user/register").post(userController_1.default.registerUser);
exports.default = router;
