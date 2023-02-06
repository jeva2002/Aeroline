import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { handleBasicLogin } from '../../../../../controller/handlers/handleUserAccount';
import { setCurrentUser } from '../../../../../controller/slices/currentUser';
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
  const dispatch = useDispatch();

  const setUser = (email: string, username: string) => {
    dispatch(setCurrentUser({ email: email, username: username }));
  };

  return (
    <div className='modal'>
      <h2 className='text-2xl text-center mb-3'>Inicia Sesión</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={LOGIN_SCHEMA}
        onSubmit={(values) => {
          handleBasicLogin(values, setUser);
        }}
      >
        <LoginForm />
      </Formik>
      <SignInGoogle />
    </div>
  );
};

export default Login;
