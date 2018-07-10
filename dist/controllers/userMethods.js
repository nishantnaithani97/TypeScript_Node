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
const Users_1 = __importDefault(require("../models/Users"));
class UserMethods {
    constructor() {
        // INSERT METHOD FOR PERFORMING INSERT FUNCTION FOR REGISTERING NEW USER.
        this.insert = (data) => __awaiter(this, void 0, void 0, function* () {
            console.log("----------in methods file--------", data);
            try {
                console.log("--------inside try method");
                const registeredUser = Users_1.default.findOne({ email: data.email }, (err, res) => {
                    console.log(err, res);
                });
                console.log("-------------------------", registeredUser);
                if (registeredUser) {
                    throw new Error("User already registered");
                }
                const newUser = yield Users_1.default.create(data);
                return newUser;
                // console.log(Users.create);
                // Users.create(data, (err: any, res: any) => {
                //   console.log(err, res);
                // })
                // new Users(data).save().then(result => {
                // console.log(result);
                // })
                // console.log(user);
                // return user.id;
            }
            catch (err) {
                console.log("-----16---", err);
                throw new Error(err);
            }
        });
        // FETCH METHOD FOR FETCHING THE DATA FROM DB FOR THE LOGIN PURPOSES.
        this.fetch = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const registeredUser = yield Users_1.default.findOne({ email: data.email });
                if (registeredUser) {
                    return registeredUser;
                }
                else {
                    throw new Error("User not found");
                }
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.default = UserMethods;
