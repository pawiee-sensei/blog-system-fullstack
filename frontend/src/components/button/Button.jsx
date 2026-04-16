import "./Button.css";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <button className="btn" type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
