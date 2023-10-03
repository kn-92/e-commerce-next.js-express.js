import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../../models/user/user";

export const signup: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    email: email,
    password: hashedPassword,
  });

  try {
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return res
        .status(409)
        .json({ message: "User with provided e-mail already exsists." });
    }
    user.save().then((data) => {
      res
        .status(201)
        .json({ message: "User signed up succesfully.", data: data });
    });
  } catch (error) {
    console.log(error);
  }
};
