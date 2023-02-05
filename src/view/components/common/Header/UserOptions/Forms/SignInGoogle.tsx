import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../../../../controller/slices/currentUser';
import { google } from '../../../../../../assets/icons';
import { handleGoogle } from '../../../../../../controller/handlers/handleUserAccount';

interface SignInGoogleProps {}

const SignInGoogle: React.FunctionComponent<SignInGoogleProps> = (props) => {
  const dispatch = useDispatch();

  const setUser = (email: string, username: string) => {
    dispatch(setCurrentUser({ email: email, username: username }));
  };

  return (
    <>
      <p className='my-2'>También puedes acceder con Google</p>
      <button
        type='button'
        className='flex justify-center items-center gap-5 bg-red-600 border-2 py-2 rounded-full text-slate-50 hover:bg-red-700'
        onClick={() => {
          handleGoogle(setUser);
        }}
      >
        <img src={google} alt='Google icon' />
        Ingresar con Google
      </button>
    </>
  );
};

export default SignInGoogle;
