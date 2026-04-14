import express from "express";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
    res.json({
        message: "This is a protected route",
        user: req.user, // This will contain the decoded token data (e.g., user ID)
    });
});

export default router;  
