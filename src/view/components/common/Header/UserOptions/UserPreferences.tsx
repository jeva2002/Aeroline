import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPreferences,
  setUserPreferences,
} from '../../../../../controller/slices/userPreferences';
import { capitalize } from '../../../../../model/services';

const avalaibleLanguages = ['español', 'english'];
const avalaibleCurrency = ['COP', 'USD'];

const UserPreferences: React.FunctionComponent = (props) => {
  const preferences = useSelector(getPreferences);
  const dispatch = useDispatch<any>();

  const [language, setLanguage] = useState(preferences.language);
  const [currency, setCurrency] = useState(preferences.currency);

  return (
    <form
      className='modal'
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          setUserPreferences({ language: language, currency: currency })
        );
      }}
    >
      <select
        className='cursor-pointer'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value={preferences.language}>
          {capitalize(preferences.language)}
        </option>
        {avalaibleLanguages.map((item, index) => {
          if (item !== preferences.language)
            return (
              <option key={index} value={item}>
                {capitalize(item)}
              </option>
            );
        })}
      </select>
      <select
        className='cursor-pointer'
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value={preferences.currency}>{preferences.currency}</option>
        {avalaibleCurrency.map((item, index) => {
          if (item !== preferences.currency)
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
        })}
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

export default UserPreferences;
