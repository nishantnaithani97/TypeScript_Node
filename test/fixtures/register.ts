export default {
  fullData: {
    "name": "test case",
    "email": "testcase@test.case",
    "password": "testcase@123"
  },

  withoutName: {
    // tslint:disable-next-line:no-null-keyword
    "name": null,
    "email": "testcase@test.case",
    "password": "testcase@123"
  },

  withoutEmail: {
    "name": "test case",
    // tslint:disable-next-line:no-null-keyword
    "email": null,
    "password": "testcase@123"
  },

  withoutPassword: {
    "name": "test case",
    "email": "testcase@test.case",
    // tslint:disable-next-line:no-null-keyword
    "password": null
  },

  withoutAnyData: {
    // tslint:disable-next-line:no-null-keyword
    "name": null,
    // tslint:disable-next-line:no-null-keyword
    "email": null,
    // tslint:disable-next-line:no-null-keyword
    "password": null
  },

  sameEmail: {
    "name": "test case",
    "email": "testcase@test.case",
    "password": "testcase@123"
  },

  testData: {
    "name": "test case",
    "email": "testcase@test.case",
    "password": "testcase@123"
  }
};
