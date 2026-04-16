import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../button/Button";
import Input from "../input/input";
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: "",
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
      const res = await registerUser(form);
      setSuccess(res.data.message);
      setForm({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />

      <br />

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

      <Button type="submit">Register</Button>

      <Alert type="success" message={success} />
      <Alert type="error" message={error} />
    </form>
  );
};

export default RegisterForm;
