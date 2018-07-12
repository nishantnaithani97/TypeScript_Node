/**
 * USER LOGIN TEST FILE
 * This file contains the test cases for testing the user"s login function.
 */
require("../../src/database");
import request from "supertest";
import Users from "../../src/models/Users";
import app from "../../src/app";
import Register from "../fixtures/register";
import Login from "../fixtures/login";
import { expect } from "chai";

// TEST CASE FOR SUCCESSFULLY LOGIN USER WITH PROVIDING ALL THE REQUIRED DATA.
describe("Inserting user for performing login operations (SUCCESS CASE)", () => {
  describe("/api/user/login", () => {
    describe("Success case", () => {
      beforeAll(async (done) => {
        await Users.remove({});
        const user = new Users(Register.testData);
        // console.log(user);
        await user.save();
        done();
      });

      // Test Case for login the user with the required details.
      it("Successfuly login of a user", (done) => {
        const user: object = Login.properData;
        return request(app)
          .get("/api/user/login")
          .set(user)
          .expect(200)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("success");
            done();
          });
      });
    });

// TEST CASES FOR NOT LOGIN USER DUE TO SOME ERRORS OR BY NOT PROVIDING ALL THE REQUIRED DETAILS.
  describe("Error Case", () => {
      // Test Case for login the user with the wrong email.
      it("Error in login of a user (WRONG EMAIL)", (done) => {
        const user = Login.userNotFound;
        request(app)
          .get("/api/user/login")
          .set(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });

      // Test Case for login the user with the wrong password.
      it("Error in login of a user (WRONG PASSWORD)", (done) => {
        const user = Login.wrongPassword;
        request(app)
          .get("/api/user/login")
          .set(user)
          .then((res) => {
            console.log("------30------", res.body);
            expect(res.body.status).to.equal("error");
            done();
          });
      });

      // Test Case for login the user without any data.
      it("Error in login of a user (WITHOUT ANY DATA)", (done) => {
          const user = Login.withoutData;
          request(app)
              .get("/api/user/login")
              .set(user)
              .then((res) => {
                console.log("------30------", res.body);
                expect(res.body.status).to.equal("error");
                done();
              });
      });

      // Test Case for login the user without email.
      it("Error in login of a user (WITHOUT EMAIL)", (done) => {
          const user = Login.withoutEmail;
          request(app)
              .get("/api/user/login")
              .set(user)
              .then((res) => {
                console.log("------30------", res.body);
                expect(res.body.status).to.equal("error");
                done();
              });
      });

      // Test Case for login the user without password.
      it("Error in login of a user (WITHOUT PASSWORD)", (done) => {
          const user = Login.withoutPassword;
          request(app)
              .get("/api/user/login")
              .set(user)
              .then((res) => {
                console.log("------30------", res.body);
                expect(res.body.status).to.equal("error");
                done();
              });
        });
    });
  });
});
