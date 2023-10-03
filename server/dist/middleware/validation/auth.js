"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignupValidation = void 0;
const express_validator_1 = require("express-validator");
const userSignupValidation = () => {
    return [
        (0, express_validator_1.body)("email")
            .trim()
            .isEmail()
            .normalizeEmail()
            .withMessage("Invalid email."),
        (0, express_validator_1.body)("password")
            .trim()
            .isLength({ min: 5 })
            .withMessage("Password must be 5 characters long."),
    ];
};
exports.userSignupValidation = userSignupValidation;
