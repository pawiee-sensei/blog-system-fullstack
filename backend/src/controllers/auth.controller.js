import { registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);

        res.status(201).json({
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: error.message || "Registration failed",
        });
    }   
};  