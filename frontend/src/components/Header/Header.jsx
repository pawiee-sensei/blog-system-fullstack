import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <h2 className="logo">Blog System</h2>

      <nav>
        {user ? (
          <>
            <span>{user.username}</span>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
