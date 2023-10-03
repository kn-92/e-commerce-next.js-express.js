"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../controllers/auth/auth");
const auth_2 = require("../../middleware/validation/auth");
const router = (0, express_1.Router)();
//POST auth/signup
router.post("/signup", (0, auth_2.userSignupValidation)(), auth_1.signup);
exports.default = router;
