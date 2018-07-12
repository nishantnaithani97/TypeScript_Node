import UserMethods from "./userMethods";
import { Request, Response } from "express";
import BaseHelper from "../lib/base";
import ResponseHelpers from "../lib/responseHelper";
import Users from "../models/Users";

class UserController extends UserMethods {

  // This methods registers the new user.
  registerUser = async (req: Request, res: Response) => {
    try {
      const reqData = BaseHelper.trimData(req.body);
      let { name, email, password } = reqData;
      if (!(name && email && password)) {
        return res.send(ResponseHelpers.error({ message: "Invalid Data Provided" }));
      }

      name = BaseHelper.getName(name);
      password = BaseHelper.getPassword(password);
      email = BaseHelper.getEmail(email);
      const data = {
        name,
        email,
        password,
      };
      const response = await this.insert(data);

      console.log("Respos", response);
      if (response && response._id) {
        console.log(response._id);
        return res.send(ResponseHelpers.success({ message: "User Successfully Registered" }));
      }
      return res.send(ResponseHelpers.error({message : "Error Occured while Registering User"}));
    } catch (err) {
      return res.send(ResponseHelpers.error(err));
    }
  };

  // This method login the user.
  loginUser = async (req: Request, res: Response) => {
    try {
        const reqData = BaseHelper.trimData(req.headers);
        let { email, password } = reqData;

        if (!(email && password)) {
          return res.send(ResponseHelpers.error({message: "Invalid Data Provided"}));
        }

        email = BaseHelper.getEmail(email);
        password = BaseHelper.getPassword(password);
        const data = {
          email,
        };

        const response: any = await this.fetch(data);
        console.log("-----------------56----------", response);
        if (response && response.password) {
          const valid = password === response.password;
          if (valid) {
            return res.send(ResponseHelpers.success(data));
          } else {
          return res.send(ResponseHelpers.error({ message : "Password is incorrect." }));
          }
       }
       return res.send(ResponseHelpers.error({ messgae : "User Not Found"}));
      } catch (err) {
      return res.send(ResponseHelpers.error(err));
    }
  };
}

export default new UserController();
