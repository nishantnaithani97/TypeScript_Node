import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 8080);
app.set("env", process.env.NODE_ENV);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

export default app;
