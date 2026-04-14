import { useState } from "react";
import Input from "../../../components/input/input";
import Button from "../../../components/button/Button";
import Alert from "../../../components/Alert/Alert";
import { loginUser } from "../../../services/authService";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

  // A form component for user login
  const navigate = useNavigate();
  const { login } = useAuth();

  // A form component for user login
  const LoginForm = () => {
    const [form, setForm] = useState({
      email: "",
      password: "",
    });

  // State to hold success and error messages
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes and form submission
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Attempt to log in the user using the loginUser function, which sends a request to the server with the form data. If the login is successful, it will receive user data in the response.
    try {
      const res = await loginUser(form);

      // Log in the user using the login function from AuthContext, passing the user data received from the server. This will update the authentication state and store the user data in localStorage.
      login(res.data);
      // After successful login, navigate the user to the dashboard page. This allows the user to access protected routes that require authentication.
      navigate("/dashboard");

      // Optionally, you can set a success message or perform other actions here
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <br />

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <br />

      <Button type="submit">Login</Button>

      <Alert type="success" message={success} />
      <Alert type="error" message={error} />
    </form>
  );
};

export default LoginForm;