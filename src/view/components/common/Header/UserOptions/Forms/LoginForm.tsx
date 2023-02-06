import { Form } from 'formik';
import TextFielFormik from '../../../Form/TextFieldFormik';

const LoginForm: React.FunctionComponent = () => {
  return (
    <Form className='flex flex-col justify-evenly gap-4'>
      <TextFielFormik name='email' label='email' />
      <TextFielFormik name='password' label='password' type='password' />
      <button
        className='text-slate-50 border-fuchsia-800 border-2 px-5 py-1 mt-2 rounded-full bg-fuchsia-800'
        type='submit'
      >
        Ingresar
      </button>
    </Form>
  );
};

export default LoginForm;
