export default {
  properData: {
    "email": "testcase@test.case",
    "password": "testcase@123"
  },

  userNotFound: {
    "email": "testcase@test123.case",
    "password": "testcase@123"
  },

  wrongPassword: {
    "email": "testcase@test123.case",
    "password": "testcase123@123"
  },

  withoutEmail: {
    // tslint:disable-next-line:no-null-keyword
    "email": null,
    "password": "testcase123@123"
  },

  withoutPassword: {
    "email": "testcase@test123.case",
    // tslint:disable-next-line:no-null-keyword
    "password": null
  },

  withoutData: {
    // tslint:disable-next-line:no-null-keyword
    "email": null,
    // tslint:disable-next-line:no-null-keyword
    "password": null
  }
};
