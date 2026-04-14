import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
// Added for the dashboard route so the app can render without crashing.
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
