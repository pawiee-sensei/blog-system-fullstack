// src/context/AuthContext.jsx
// This context manages user authentication state across the app. It provides a way to log in, log out, and persist user data in localStorage.
import { createContext, useContext, useState, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component that wraps the app and provides authentication state and functions
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load from localStorage on refresh. This effect runs once when the component mounts and checks if there is user data stored in localStorage. If it finds any, it parses the JSON string and sets the user state with that data, allowing the user to remain logged in across page refreshes.
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to log in the user and store their data in state and localStorage. The userData parameter is expected to be an object containing user information, such as username and token.
  const login = (data) => {
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  // Function to log out the user by clearing the user state and removing their data from localStorage. This effectively logs the user out of the application.
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Provide the user state and authentication functions to the rest of the app through the AuthContext.Provider. The value prop contains the current user data and the login/logout functions, making them accessible to any component that consumes this context.
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );


};

// custom hook
export const useAuth = () => useContext(AuthContext);