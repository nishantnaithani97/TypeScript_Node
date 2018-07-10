"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mockgoose_1 = require("mockgoose");
const config_1 = __importDefault(require("./config/config"));
/// <reference type="built" />
const mockgoose = new mockgoose_1.Mockgoose(mongoose_1.default);
const options = {
    useNewUrlParser: true
};
// Use native promises
global.Promise = require("q").Promise;
mongoose_1.default.Promise = global.Promise;
// connect to mongoose
console.log("MongoDB url", config_1.default.mongo.uri, process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
    mongoose_1.default.connect(config_1.default.mongo.uri, options);
}
else {
    mockgoose.prepareStorage().then(() => {
        mongoose_1.default.connect(config_1.default.mongo.uri, options);
    });
}
if (mockgoose.helper.isMocked() === true) {
    console.log("Db is mocked");
}
mongoose_1.default.connection.on("connected", () => {
    console.log("Connected to database");
});
mongoose_1.default.connection.on("error", (err) => {
    console.log("err", err);
});
