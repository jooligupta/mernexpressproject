const UserModel = require("../../models/User");
const bcrypt = require("bcrypt");
const { dashboard } = require("./AdminController");
const jwt = require("jsonwebtoken");
class UserController {
  static registerinsert = async (req, res) => {
    const { name1, email, password, cpassword } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      req.flash("error", "Email already Exit!..");
      res.redirect("/admin/register");
    } else {
      if (name1 && email && password && cpassword) {
        if (password == cpassword) {
          try {
            //const salt=await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, 10);
            const data = new UserModel({
              name: name1,
              email: email,
              password: hashPassword,
              cpassword: cpassword,
            });
            const datasaved = await data.save();
            if (datasaved) {
              req.flash(
                "successMsg",
                "Registration Successful,Please again!.."
              );
              res.redirect("/user/login");
            } else {
              res.redirect("/admin/register");
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          req.flash("error", "Password and ConPassword does not Match!..");
          res.redirect("/admin/register");
        }
      } else {
        req.flash("error", "All Field are registered!..");
        res.redirect("/admin/register");
      }
    }
  };

  static register = async (req, res) => {
    try {
      res.render("admin/register", { message: req.flash("error") });
    } catch (err) {
      console.log(err);
    }
  };
  static login = async (req, res) => {
    try {
      res.render("admin/login", {
        successMessage: req.flash("successMsg"),
        errMsg: req.flash("error"),
      });
    } catch (err) {
      res.render(err);
    }
  };
  static verifylogin = async (req, res) => {
    try {
      //console.log(req.body)
      const { email, password } = req.body;
      console.log(password);
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        console.log(user);
        if (user != null) {
          const isMatched = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatched) {
            //generate jwt token
            var token = jwt.sign({ userId: user._id }, "jooligupta12345");
            console.log(token);
            res.cookie('jwt',token)
            res.redirect("/admin/dashboard");
          } else {
            req.flash("error", "Email and Password does not match!...");
            res.redirect("/user/login");
          }
        } else {
          req.flash("error", "You are not register user!.");
          res.redirect("/user/login");
        }
      } else {
        req.flash("error", "All Field are required..");
        res.redirect("/user/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  static logout = async (req, res) => {
    try {
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = UserController;
