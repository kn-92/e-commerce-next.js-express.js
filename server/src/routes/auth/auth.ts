import { Router } from "express";
import { signup } from "../../controllers/auth/auth";

const router = Router();

//POST auth/signup
router.post("/signup", signup);

export default router;
