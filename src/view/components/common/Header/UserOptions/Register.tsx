import { Formik } from 'formik';
import { handleBasicRegister } from '../../../../../controller/handlers/handleUserAccount';
import { REGISTER_SCHEMA } from '../../../../../model/services/validateForm';
import RegisterForm from './Forms/RegisterForm';
import SignInGoogle from './Forms/SignInGoogle';

export interface RegisterValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  conditions: boolean;
}

const INITIAL_VALUES: RegisterValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  conditions: false,
};

const Register: React.FunctionComponent = (props) => {
  return (
    <div className='modal'>
      <h2 className='text-2xl mb-4'>Regístrate</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={REGISTER_SCHEMA}
        validate={(values) => {
          const errors: { conditions: null | string } = {
            conditions: null,
          };
          if (!Boolean(values.conditions)) {
            errors.conditions = 'Se deben aceptar los términos y condiciones';
            return errors;
          } else errors.conditions = null;
        }}
        onSubmit={(values) => handleBasicRegister(values)}
      >
        <RegisterForm />
      </Formik>
      <SignInGoogle />
    </div>
  );
};

export default Register;
