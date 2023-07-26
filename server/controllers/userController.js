import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = await new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashed,
      });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
      if (!user) {
        res.status(404).json("User wrong");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("Password wrong");
      }
      if (user && validPassword) {
        const Token = jwt.sign(
          {
            id: user.id,
          },
          process.env.Token_Key,
          { expiresIn: "2h" }
        );

        res.status(200).json({ user, Token });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

export default userController;
