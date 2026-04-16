import express from "express";
import { create } from "../controllers/post.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, create);

export default router;
