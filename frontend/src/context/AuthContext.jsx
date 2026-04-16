import { createContext, useContext, useState, useEffect } from "react";


// Create a context for authentication
const AuthContext = createContext();

// Create a provider component to wrap the app and provide authentication state and functions
export const AuthProvider = ({ children }) => {
  // State to hold the current user, initialized to null
  const [user, setUser] = useState(null);

  // On component mount, check if there's a user stored in localStorage and set it in state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } 
  }, []);

  // Function to handle user login, which sets the user state and stores the user and token in localStorage
  const login = (data) => {
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(data.user));

    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
