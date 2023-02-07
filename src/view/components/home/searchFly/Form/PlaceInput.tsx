import { useField } from 'formik';
import { useState } from 'react';
import { capitalize } from '../../../../../model/services';
import SelectPlace from './SelectPlace';

interface Props {
  name: string;
  label: string;
  type?: string;
  className?: string;
}

const PlaceInput: React.FunctionComponent<Props> = ({
  name,
  label,
  type,
  className,
}) => {
  const [show, setShow] = useState(false);
  const [field, , helper] = useField(name);

  return (
    <div
      className='index-0 p-3 flex flex-col md:w-56 w-40 justify-center gap-3 text-center cursor-pointer border-2 border-slate-200'
      onClick={() => {
        setShow(true);
      }}
    >
      <input
        className='text-2xl text-center bg-transparent cursor-pointer font-bold'
        name={field.name}
        value={field.value}
        type={type ?? 'text'}
        placeholder={capitalize(label)}
        disabled
      />
      <label htmlFor={name} className='cursor-pointer text-slate-500'>
        {capitalize(label)}
      </label>
      {show ? (
        <SelectPlace helper={helper} setShow={setShow} value={field.value} />
      ) : null}
    </div>
  );
};

export default PlaceInput;
