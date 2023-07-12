import userModel from "../models/User.js";
import bcrypt from "bcrypt";

class userController {
  static home = (req, res) => {
    res.render("index");
  };

  static registration = (req, res) => {
    res.render("registration");
  };

  static creatUserDoc = async (req, res) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

    try {
      const doc = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      await doc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  static login = (req, res) => {
    res.render("login");
  };

  static varifyLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await userModel.findOne({ email: email });

      if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
          res.redirect("/dashboard");
        } else {
          res.send("<h1>Email or Password Not Valid</h1>");
        }
      } else {
        res.send("<h1>You Are Not a Registered User</h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };
  static dashBoard = (req, res) => {
    res.render("dashboard");
  };
}

export default userController;
