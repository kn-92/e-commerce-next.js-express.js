"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../controllers/auth/auth");
const router = (0, express_1.Router)();
router.post("/register", auth_1.signup);
exports.default = router;
