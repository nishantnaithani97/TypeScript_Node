"use strict";
/**
 * USERS MODEL
 * This file contains the model of users schema.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const newLocal = mongoose_1.default.Schema;
const Schema = newLocal;
const userSchema = new Schema({
    name: {
        type: String,
        max: 50,
        min: 3,
        required: true,
    },
    email: {
        type: String,
        max: 50,
        min: 8,
        unique: true,
        required: true
    },
    password: {
        type: String,
        max: 200,
        min: 5,
        required: true,
    }
});
const Users = mongoose_1.default.model("User", userSchema);
exports.default = Users;
