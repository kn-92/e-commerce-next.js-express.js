"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../controllers/auth/auth");
const auth_2 = require("../../middleware/validation/auth");
const router = (0, express_1.Router)();
//POST auth/signup
router.post("/signup", (0, auth_2.userSignupOrLoginValidation)(), auth_1.signup);
router.post("/login", (0, auth_2.userSignupOrLoginValidation)(), auth_1.login);
exports.default = router;
