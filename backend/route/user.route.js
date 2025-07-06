import express from "express";
import { signin, signup ,saveQuizScore} from "../controller/user.controller.js";
const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
router.post('/saveQuizScore', saveQuizScore);
export default router;