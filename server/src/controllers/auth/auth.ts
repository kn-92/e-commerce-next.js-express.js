import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import { User } from "../../models/user/user";

import { MiddlewareError } from "../../types";

export const signup: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: MiddlewareError = new Error("Validation failed");
    error.statusCode = 422;
    error.errorsArray = errors.array();
    return next(error);
  }
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
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      next(error);
    }
  }
};
