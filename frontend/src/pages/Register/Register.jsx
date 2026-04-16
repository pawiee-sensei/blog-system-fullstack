import AuthPageLayout from "../../components/auth/AuthPageLayout";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthPageLayout title="Register">
      <RegisterForm />
    </AuthPageLayout>
  );
};

export default Register;
