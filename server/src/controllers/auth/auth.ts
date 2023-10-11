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
  const hashedPassword = await bcrypt.hash(password, 12).catch((error) => {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  });
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
        .json({ message: "User signed up succesfully.", user_id: data._id });
    });
  } catch (error: any) {
    if (!error.statusCode) {
      error.statusCode = 500;
      next(error);
    }
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error: MiddlewareError = new Error("Validation failed");
    error.statusCode = 422;
    error.errorsArray = errors.array();
    return next(error);
  }
  const { email, password } = req.body;
  try {
  } catch (error) {}

  const exsistingUser = await User.findOne({ email: email }).catch((error) => {
    if (!error.statusCode) {
      error.statusCode = 500;
      next(error);
    }
  });
  if (!exsistingUser) {
    const error: MiddlewareError = new Error(
      "User with provided email doesn't exsist."
    );
    error.statusCode = 404;
    return next(error);
  }
  const isPasswordEqual = await bcrypt
    .compare(password, exsistingUser.password)
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
        next(error);
      }
    });
  if (!isPasswordEqual) {
    const error: MiddlewareError = new Error(
      "Provided password doesn't match."
    );
    error.statusCode = 401;
    return next(error);
  }
  res.status(200).json({ message: "Logged in sucesfully!." });
};
