/**
 * USERS MODEL
 * This file contains the model of users schema.
 */

import mongoose from "mongoose";

const newLocal = mongoose.Schema;
const Schema = newLocal;

const userSchema = new Schema({
  name: {
    type: String,
    max: 50,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    max: 50,
    min: 8,
    unique: true,
    required: true
  },
  password: {
    type: String,
    max: 200,
    min: 5,
    required: true,
  }
});

const Users = mongoose.model("User", userSchema);
export default Users;
