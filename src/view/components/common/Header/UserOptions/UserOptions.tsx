import { useState } from 'react';
import { useSelector } from 'react-redux';
import UserPreferences from './UserPreferences';
import { getPreferences } from '../../../../../controller/slices/userPreferences';
import { capitalize } from '../../../../../model/services';
import Register from './Register';

type modalSelected = '' | 'currencyAndLanguage' | 'signUp' | 'login';

const UserOptions: React.FunctionComponent = () => {
  const [modal, setModal] = useState<modalSelected>('');
  const preferences = useSelector(getPreferences);

  const showModal = () => {
    switch (modal) {
      case 'currencyAndLanguage':
        return <UserPreferences />;
      case 'signUp':
        return <Register />;
      default:
        break;
    }
  };

  return (
    <div className='relative'>
      <div className='flex justify-evenly gap-10'>
        <button
          className='border-x-2 px-10'
          onClick={() =>
            setModal(
              modal !== 'currencyAndLanguage' ? 'currencyAndLanguage' : ''
            )
          }
        >
          {capitalize(preferences.language)} / {preferences.currency}
        </button>
        <button
          className='text-fuchsia-800 border-1 rounded-full hover:border-slate-500'
          onClick={() => setModal(modal !== 'signUp' ? 'signUp' : '')}
        >
          Registrate
        </button>
        <button
          className='text-fuchsia-800 border-fuchsia-800 border-2 px-5 py-3 rounded-full hover:bg-fuchsia-100'
          onClick={() => setModal(modal !== 'login' ? 'login' : '')}
        >
          Inicia sesión
        </button>
      </div>
      {showModal()}
    </div>
  );
};

export default UserOptions;
