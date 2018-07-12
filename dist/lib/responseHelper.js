"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* RESPONSE HELPERS FILE
This file helps in sending response as success or error from service to the UI.
And response can be handled properly with the help of this file. */
console.log("inside response helpers");
const response = {
    error: (err) => {
        if (!err) {
            // eslint-disable-next-line no-console
            err = new Error("Unknown error");
        }
        const formatted = {
            message: err.message,
        };
        if (err.errors) {
            formatted.errors = {};
            const errors = err.errors;
            Object.keys(errors).forEach((type) => {
                if (errors.hasOwnProperty(type)) {
                    formatted.errors[type] = errors[type].message;
                }
            });
        }
        return { status: "error", error: formatted };
    },
    success: (data) => {
        return { status: "success", data: data };
    }
};
exports.default = response;
