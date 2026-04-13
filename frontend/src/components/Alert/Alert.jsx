import "./Alert.css";

const Alert = ({ type, message }) => {
  if (!message) return null;

  return <p className={`alert ${type}`}>{message}</p>;
};

export default Alert;