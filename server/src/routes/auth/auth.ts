import { Router } from "express";
import { signup, login } from "../../controllers/auth/auth";

import { userSignupOrLoginValidation } from "../../middleware/validation/auth";

const router = Router();

//POST auth/signup
router.post("/signup", userSignupOrLoginValidation(), signup);
router.post("/login", userSignupOrLoginValidation(), login);

export default router;
