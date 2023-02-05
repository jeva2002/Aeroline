import { Formik } from 'formik';
import { LOGIN_SCHEMA } from '../../../../../model/services/validateForm';
import LoginForm from './Forms/LoginForm';
import SignInGoogle from './Forms/SignInGoogle';

export interface LoginValues {
  email: string;
  password: string;
}

const INITIAL_VALUES: LoginValues = {
  email: '',
  password: '',
};

const Login: React.FunctionComponent = () => {
  return (
    <div className='modal'>
      <h2 className='text-2xl text-center mb-3'>Inicia Sesión</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={LOGIN_SCHEMA}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <LoginForm />
      </Formik>
      <SignInGoogle />
    </div>
  );
};

export default Login;
