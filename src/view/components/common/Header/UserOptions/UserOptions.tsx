import { useState } from 'react';
import CurrencyAndLanguage from './CurrencyAndLanguage';
import './UserOptions.scss';

type modalSelected = '' | 'currencyAndLanguage' | 'signUp' | 'login';

const UserOptions: React.FunctionComponent = () => {
  const [modal, setModal] = useState<modalSelected>('');
  const showModal = () => {
    switch (modal) {
      case 'currencyAndLanguage':
        return <CurrencyAndLanguage />;
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
          Español/ $COP
        </button>
        <button
          className='text-fuchsia-800'
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
