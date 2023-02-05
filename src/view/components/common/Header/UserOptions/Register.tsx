import { Formik } from 'formik';
import { REGISTER_SCHEMA } from '../../../../../model/services';
import RegisterForm from './Forms/RegisterForm';

interface Values {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  conditions: boolean;
}

const INITIAL_VALUES: Values = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  conditions: false,
};

const Register: React.FunctionComponent = (props) => {
  return (
    <div className='modal'>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={REGISTER_SCHEMA}
        onSubmit={(values) => console.log(values)}
      >
        <RegisterForm />
      </Formik>
    </div>
  );
};

export default Register;
