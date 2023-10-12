"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_validator_1 = require("express-validator");
const user_1 = require("../../models/user/user");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const error = new Error("Validation failed");
        error.statusCode = 422;
        error.errorsArray = errors.array();
        return next(error);
    }
    const { email, password } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 12).catch((error) => {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    });
    const user = new user_1.User({
        email: email,
        password: hashedPassword,
    });
    try {
        const exsistingUser = yield user_1.User.findOne({ email });
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
    }
    catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
            next(error);
        }
    }
});
exports.signup = signup;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const error = new Error("Validation failed");
        error.statusCode = 422;
        error.errorsArray = errors.array();
        return next(error);
    }
    const { email, password } = req.body;
    const exsistingUser = yield user_1.User.findOne({ email: email }).catch((error) => {
        if (!error.statusCode) {
            error.statusCode = 500;
            next(error);
        }
    });
    if (!exsistingUser) {
        const error = new Error("User with provided email doesn't exsist.");
        error.statusCode = 404;
        return next(error);
    }
    const isPasswordEqual = yield bcrypt_1.default
        .compare(password, exsistingUser.password)
        .catch((error) => {
        if (!error.statusCode) {
            error.statusCode = 500;
            next(error);
        }
    });
    if (!isPasswordEqual) {
        const error = new Error("Provided password doesn't match.");
        error.statusCode = 401;
        return next(error);
    }
    const secret = process.env.SECRET;
    const token = jsonwebtoken_1.default.sign({
        email: exsistingUser.email,
        userId: exsistingUser._id.toString(),
    }, secret, { expiresIn: "1h" });
    res.status(200).json({
        message: "Logged in succesfully!.",
        token,
        userId: exsistingUser._id.toString(),
    });
});
exports.login = login;
