import Users from "../models/Users";

class UserMethods {
    // INSERT METHOD FOR PERFORMING INSERT FUNCTION FOR REGISTERING NEW USER.
  insert = async (data: any) => {
    try {
      const registeredUser = await Users.findOne({email: data.email});
      if (registeredUser) {
        return "User already registered";
      }
      const newUser = await Users.create(data);
      return newUser;
    } catch (err) {
      console.log("-----16---", err);
      // throw new Error(err);
      return err;
    }
  };

  // FETCH METHOD FOR FETCHING THE DATA FROM DB FOR THE LOGIN PURPOSES.
  fetch = async (data: any) => {
    try {
      console.log("Fetch", data);
      const registeredUser = await Users.findOne({ email : data.email });
      if (registeredUser) {
        return registeredUser;
      } else {
        return ("User not found");
      }
    } catch (err) {
      return Error(err);
    }
  };
}

export default UserMethods;