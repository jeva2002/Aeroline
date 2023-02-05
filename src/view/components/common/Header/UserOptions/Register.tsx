import { Formik } from 'formik';
import { google } from '../../../../../assets/icons';
import {
  handleBasicRegister,
  handleGoogleRegister,
} from '../../../../../controller/handlers/handleRegister';
import { REGISTER_SCHEMA } from '../../../../../model/services';
import RegisterForm from './Forms/RegisterForm';

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
      <p className='my-2'>También puedes acceder con Google</p>
      <button
        type='button'
        className='flex justify-center items-center gap-5 bg-red-600 border-2 py-2 rounded-full text-slate-50 hover:bg-red-700'
        onClick={handleGoogleRegister}
      >
        <img src={google} alt='Google icon' />
        Registrar
      </button>
    </div>
  );
};

export default Register;
