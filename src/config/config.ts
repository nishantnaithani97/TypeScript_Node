/**
 * CONFIG FILE
 * This file contains the configurations related to the DB, middleware, and environment.
 */

import merge from 'merge';

let environmentConfigs : object;
let defaultConfig : object;

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
export default merge(defaultConfig, (environmentConfigs as any)[(defaultConfig as any).env]);