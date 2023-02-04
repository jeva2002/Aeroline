import { useState } from 'react';

const CurrencyAndLanguage: React.FunctionComponent = (props) => {
  const [language, setLanguage] = useState('Español');
  const [currency, setCurrency] = useState('Español');

  return (
    <form className='modal'>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value='español'>Español</option>
        <option value='english'>English</option>
      </select>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value='COP'>COP</option>
        <option value='USD'>USD</option>
      </select>
      <button
        className='text-fuchsia-800 border-fuchsia-800 border-2 px-5 py-2 rounded-full hover:bg-fuchsia-100'
        type='submit'
      >
        Aplicar
      </button>
    </form>
  );
};

export default CurrencyAndLanguage;
