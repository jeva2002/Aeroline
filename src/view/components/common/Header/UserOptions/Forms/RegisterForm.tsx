import { Form } from 'formik';
import CheckboxFormik from '../../../Form/CheckboxFormik';
import TextFielFormik from '../../../Form/TextFieldFormik';

const RegisterForm: React.FunctionComponent = () => {
  return (
    <Form className='flex flex-col justify-evenly gap-4'>
      <TextFielFormik name='firstname' label='firstname' />
      <TextFielFormik name='lastname' label='lastname' />
      <TextFielFormik name='email' label='email' />
      <TextFielFormik name='password' label='password' type='password' />
      <CheckboxFormik name='conditions' label='Términos y condiciones' />
      <button
        className='text-slate-50 border-fuchsia-800 border-2 px-5 py-1 rounded-full bg-fuchsia-800'
        type='submit'
      >
        Registrar
      </button>
    </Form>
  );
};

export default RegisterForm;
