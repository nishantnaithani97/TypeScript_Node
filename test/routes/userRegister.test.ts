/**
 * USER REGISTER TEST FILE
 * This file contains the test cases for testing the user's registeration process.
 */
require("../../src/database");
import request from "supertest";
import { expect } from "chai";
import Users from "../../src/models/Users";
import app from "../../src/app";
import Register from "../fixtures/register";

// TEST CASE FOR SUCCESSFULLY REGISTERING USER WITH PROVIDING ALL THE VALID DETAILS.
describe("Test cases for registering user.", () => {
  // Test Case for registering the user with every detail.
  describe("/api/user/register", () => {
    describe("Success Case", () => {
      beforeEach(async (done) => {
        await Users.remove({});
        done();
      });

    it("Required fields are provided for user registration", (done) => {
      const user = Register.fullData;
      return request(app)
        .post("/api/user/register")
        .send(user)
        .then((res) => {
          console.log("------30------", res.body);
          expect(res.body.status).to.equal("success");
          done();
        });
      });
    });

  // Test case for registering the user without providing name.
  // describe("/api/user/register", () => {
    describe("Error Case", () => {
      beforeAll(async (done) => {
        await Users.remove({});
        const user = new Users(Register.testData);
        // console.log(user);
        await user.save();
        done();
      });
      it("Name is not given", (done) => {
        const user = Register.withoutName;
        return request(app)
          .post("/api/user/register")
          .send(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });

      // Test case for registering the user without providing address in email.
      it("Address in email is missing", (done) => {
        const user = Register.withoutEmail;
        return request(app)
          .post("/api/user/register")
          .send(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });

      // Test case for registering the user without providing password.
      it("Password is missing", (done) => {
        const user = Register.withoutPassword;
        return request(app)
          .post("/api/user/register")
          .send(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });

      // // Test case for registering the user without providing any details.
      it("No data is present", (done) => {
        const user = Register.withoutAnyData;
        return request(app)
          .post("/api/user/register")
          .send(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });

      // Test case for registering the user with same email.
      it("User with same email address", (done) => {
        const user = Register.sameEmail;
        return request(app)
          .post("/api/user/register")
          .send(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });
    });
  });
});
// jest.setTimeout(100000);