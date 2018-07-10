import Users from "../models/Users";

class UserMethods {
    // INSERT METHOD FOR PERFORMING INSERT FUNCTION FOR REGISTERING NEW USER.
  insert = async (data: any) => {
    console.log("----------in methods file--------", data);
    try {
      console.log("--------inside try method");
      const registeredUser = Users.findOne({email: data.email}, (err, res) => {
        console.log(err, res);
      });
      console.log("-------------------------", registeredUser);
      if (registeredUser) {
        throw new Error("User already registered");
      }
      const newUser = await Users.create(data);
      return newUser;
      // console.log(Users.create);

      // Users.create(data, (err: any, res: any) => {
      //   console.log(err, res);
      // })

      // new Users(data).save().then(result => {
      // console.log(result);
      // })
      // console.log(user);
      // return user.id;
    } catch (err) {
      console.log("-----16---", err);
      throw new Error(err);
    }
  };

  // FETCH METHOD FOR FETCHING THE DATA FROM DB FOR THE LOGIN PURPOSES.
  fetch = async (data: any) => {
    try {
      const registeredUser = await Users.findOne({ email : data.email });
      if (registeredUser) {
        return registeredUser;
      } else {
        throw new Error("User not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  };
}

export default UserMethods;