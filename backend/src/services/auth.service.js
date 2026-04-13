import pool from "../config/db.js";
import bcrypt from "bcrypt";    

export const registerUser = async (username, email, password) => {

    // 1. Validate input
    if (!username || !email || !password) {
        throw new Error("Username, email, and password are required");  

    }
    // 2. Check if user already exists
    const [existing] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);   

    if (existing.length > 0) {
        throw new Error("User with this email already exists");
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

     // 4. Insert user
    const [result] = await pool.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
    );

    return {
        id: result.insertId,
        username,
        email,
     };
};
