import "./input.css";

// A reusable input component that can be used for different types of inputs (text, email, password, etc.)
const Input = ({ type = "text", name, value, onChange, placeholder }) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
};

export default Input;