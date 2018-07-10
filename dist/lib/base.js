"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseHelper {
    constructor() {
        this.getName = (name) => {
            const uName = name;
            return uName;
        };
        this.getEmail = (email) => {
            const uEmail = email ? email.toLowerCase() : '';
            return uEmail;
        };
        this.getPassword = (password) => {
            const uPassword = password;
            return uPassword;
        };
        this.trimData = (obj) => {
            Object.keys(obj).forEach((key) => {
                if (typeof (obj[key]) === 'string') {
                    obj[key] = obj[key].trim();
                }
            });
            return obj;
        };
    }
}
exports.default = new BaseHelper;
