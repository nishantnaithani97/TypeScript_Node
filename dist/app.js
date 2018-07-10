"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
// Load environment variables from .env file, where API keys and passwords are configured
dotenv_1.default.config();
// Create Express server
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 8080);
app.set("env", process.env.NODE_ENV);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
exports.default = app;
