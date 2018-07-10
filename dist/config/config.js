"use strict";
/**
 * CONFIG FILE
 * This file contains the configurations related to the DB, middleware, and environment.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = __importDefault(require("merge"));
let environmentConfigs;
let defaultConfig;
defaultConfig = {
    env: process.env.NODE_ENV,
    get envs() {
        return {
            test: process.env.NODE_ENV === 'test',
            development: process.env.NODE_ENV === 'development',
        };
    },
    mongo: {
        seed: true,
        options: {
            db: {
                safe: true,
            },
        },
    },
};
// Environment specific overrides
environmentConfigs = {
    development: {
        mongo: {
            uri: process.env.DB_URL || 'mongodb://localhost:27017/typescript',
        },
    },
    test: {
        port: 6010,
        mongo: {
            uri: process.env.DB_URL_TEST || 'mongodb://localhost:27017/typrescript-test',
        },
    },
};
// Recursively merge configurations
exports.default = merge_1.default(defaultConfig, environmentConfigs[defaultConfig.env]);
