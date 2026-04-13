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

    // 5. Return user data (excluding password)
    return {
        id: result.insertId,
        username,
        email,
     };
};


// Service function to handle user login
export const loginUser = async ({ email, password }) => {
  // 1. Validate input
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // 2. Find user
  const [users] = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  // If no user found, throw error
  if (users.length === 0) {
    throw new Error("Invalid credentials");
  }
  // Get the first user (should only be one due to unique email constraint)
  const user = users[0];

  // 3. Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  // If password does not match, throw error
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // 4. Return safe data
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
};
