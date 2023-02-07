import { useEffect, useState } from 'react';
import { FieldHelperProps } from 'formik';
import { x } from '../../../../../assets/icons';

const places: [string, string][] = [
  ['Afganistán', '+93'],
  ['Antigua y Barbuda', '+1 (268)'],
  ['Brasil', '+55'],
  ['Chad', '+235'],
  ['Colombia', '+57'],
  ['Yibuti', '+253'],
  ['El Salvador', '+503'],
  ['Etiopía', '+251'],
  ['Islandia', '+354'],
];

interface SelectPlaceProps {
  helper: FieldHelperProps<any>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  value: any;
}

const SelectPlace: React.FunctionComponent<SelectPlaceProps> = ({
  helper,
  setShow,
  value,
}) => {
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (value === selected) setShow(false);
  }, [selected]);

  return (
    <div className='modal absolute sm:left-1/4 w-96 left-0 top-24 z-50 border-slate-200'>
      <div className='flex justify-between items-center'>
        <input
          className='md:p-3 p-1 placeholder:px-6 bg-slate-50 w-auto grow'
          name='search'
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
          placeholder='Busca el lugar que te interesa'
        />
      </div>
      <ul className='flex flex-col border-2 border-slate-100'>
        {places
          .filter((place) => {
            if (place[0].toLowerCase().includes(filter.toLowerCase())) {
              return true;
            } else return null;
          })
          .map((place) => (
            <li
              className='md:py-3 py-1 px-5 cursor-pointer hover:bg-slate-100 border-b-2 border-slate-100 flex justify-between'
              key={place[1]}
              onClick={() => {
                helper.setValue(place[0]);
                setSelected(place[0]);
              }}
            >
              {place[0]}
              <small className='font-light text-slate-500'>{place[1]}</small>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectPlace;
