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
describe("Test cases for registering user. (SUCCESS CASE)", () => {
  // Test Case for registering the user with every detail.
  describe("/api/user/register", () => {
    describe("Success Case", () => {
      beforeAll(() => {
        Users.remove({});
      });

      it("Required fields are provided for user registration", () => {
        const user = Register.fullData;
        request(app)
          .post("/api/user/register")
          .send(user)
          .end((err, res) => {
            expect(res.body).to.be.a("object");
            expect(res.body.status).to.equal("success");
          });
      });
    });
  });
});

// TEST CASES BY WHICH USER CANNOT BE REGISTERED.
describe("Test cases for registering user. (ERROR CASES)", () => {

  // Test case for registering the user without providing name.
  describe("/api/user/register", () => {
    describe("Error Case", () => {
      beforeAll(() => {
        Users.remove({});
        const user = new Users(Register.testData);
        // console.log(user);
        user.save();
      });

      it("Name is not given", () => {
        const user = Register.withoutName;
        request(app)
          .post("/api/user/register")
          .send(user)
          .end((err, res) => {
            expect(res.body).to.be.a("object");
            expect(res.body.status).to.equal("error");
          });
      });

      // Test case for registering the user without providing address in email.
      it("Address in email is missing", () => {
        const user = Register.withoutEmail;
        request(app)
          .post("/api/user/register")
          .send(user)
          .end((err, res) => {
            expect(res.body).to.be.a("object");
            expect(res.body.status).to.equal("error");
          });
      });

      // Test case for registering the user without providing password.
      it("Password is missing", () => {
        const user = Register.withoutPassword;
        request(app)
          .post("/api/user/register")
          .send(user)
          .end((err, res) => {
            expect(res.body).to.be.a("object");
            expect(res.body.status).to.equal("error");
          });
      });

      // Test case for registering the user without providing any details.
      it("No data is present", () => {
        const user = Register.withoutAnyData;
        request(app)
          .post("/api/user/register")
          .send(user)
          .end((err, res) => {
            expect(res.body).to.be.a("object");
            expect(res.body.status).to.equal("error");
          });
      });

      // Test case for registering the user with same email.
      it("User with same email address", () => {
        const user = Register.sameEmail;
        request(app)
          .post("/api/user/register")
          .send(user)
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.be.a("object");
            expect(res.body.status).to.be.equal("error");
          });
      });
    });
  });
});
