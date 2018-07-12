"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userMethods_1 = __importDefault(require("./userMethods"));
const base_1 = __importDefault(require("../lib/base"));
const responseHelper_1 = __importDefault(require("../lib/responseHelper"));
class UserController extends userMethods_1.default {
    constructor() {
        super(...arguments);
        // This methods registers the new user.
        this.registerUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqData = base_1.default.trimData(req.body);
                let { name, email, password } = reqData;
                if (!(name && email && password)) {
                    return res.send(responseHelper_1.default.error({ message: "Invalid Data Provided" }));
                }
                name = base_1.default.getName(name);
                password = base_1.default.getPassword(password);
                email = base_1.default.getEmail(email);
                const data = {
                    name,
                    email,
                    password,
                };
                const response = yield this.insert(data);
                console.log("Respos", response);
                if (response && response._id) {
                    console.log(response._id);
                    return res.send(responseHelper_1.default.success({ message: "User Successfully Registered" }));
                }
                return res.send(responseHelper_1.default.error({ message: "Error Occured while Registering User" }));
            }
            catch (err) {
                return res.send(responseHelper_1.default.error(err));
            }
        });
        // This method login the user.
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqData = base_1.default.trimData(req.headers);
                let { email, password } = reqData;
                if (!(email && password)) {
                    return res.send(responseHelper_1.default.error({ message: "Invalid Data Provided" }));
                }
                email = base_1.default.getEmail(email);
                password = base_1.default.getPassword(password);
                const data = {
                    email,
                };
                const response = yield this.fetch(data);
                console.log('-----------------56----------', response);
                if (response && response.password) {
                    const valid = password === response.password;
                    if (valid) {
                        return res.send(responseHelper_1.default.success(data));
                    }
                    return res.send(responseHelper_1.default.error({ message: "Password is incorrect." }));
                }
                return res.send(responseHelper_1.default.error({ messgae: "User Not Found" }));
            }
            catch (err) {
                return res.send(responseHelper_1.default.error(err));
            }
        });
    }
}
exports.default = new UserController();
