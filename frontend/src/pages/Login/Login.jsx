import AuthPageLayout from "../../components/auth/AuthPageLayout";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthPageLayout title="Login">
      <LoginForm />
    </AuthPageLayout>
  );
};

export default Login;
