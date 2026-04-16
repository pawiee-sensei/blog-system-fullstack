import "./AuthPageLayout.css";

const AuthPageLayout = ({ title, children }) => {
  return (
    <section className="auth-page">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default AuthPageLayout;
