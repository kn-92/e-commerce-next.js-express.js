import { body } from "express-validator";

export const userSignupOrLoginValidation = () => {
  return [
    body("email")
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage("Invalid email."),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Password must be 5 characters long."),
  ];
};
