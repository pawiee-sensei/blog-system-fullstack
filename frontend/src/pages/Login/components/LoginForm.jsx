import { useState } from "react";
import Input from "../../../components/input/input";
import Button from "../../../components/button/Button";
import Alert from "../../../components/Alert/Alert";
import { loginUser } from "../../../services/authService";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const res = await loginUser(form);

      setSuccess(res.data.message);

      console.log("USER:", res.data.user);
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