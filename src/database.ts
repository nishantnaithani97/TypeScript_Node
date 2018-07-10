import mongoose from "mongoose";
import { Mockgoose } from "mockgoose";
import Config from "./config/config";
/// <reference type="built" />

const mockgoose: Mockgoose = new Mockgoose(mongoose);

const options: object = {
  useNewUrlParser: true
};

// Use native promises
global.Promise = require("q").Promise;
mongoose.Promise = global.Promise;

// connect to mongoose
console.log("MongoDB url", Config.mongo.uri, process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  mongoose.connect(Config.mongo.uri, options);
} else {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(Config.mongo.uri, options);
    });
}

if (mockgoose.helper.isMocked() === true) {
  console.log("Db is mocked");
}
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
