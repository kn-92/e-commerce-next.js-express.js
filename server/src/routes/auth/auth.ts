import { Router } from "express";
import { signup } from "../../controllers/auth/auth";

import { userSignupValidation } from "../../middleware/validation/auth";

const router = Router();

//POST auth/signup
router.post("/signup", userSignupValidation(), signup);

export default router;
