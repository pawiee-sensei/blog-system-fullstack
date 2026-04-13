import { registerUser, loginUser } from "../services/auth.service.js";

// export the function so other files can import it
export const register = async (req, res) => {

    // 1. Call the service function to register the user
    try {
    // 2. Send a successful JSON response with status code 201
        const user = await registerUser(req.body);
     // 3. Return the created user data (excluding password)
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

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};