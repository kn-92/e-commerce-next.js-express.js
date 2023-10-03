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
exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../../models/user/user");
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const hashedPassword = yield bcrypt_1.default.hash(password, 12);
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
                .json({ message: "User signed up succesfully.", data: data });
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.signup = signup;
