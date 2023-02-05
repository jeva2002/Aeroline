import { useField } from 'formik';
import { useState } from 'react';

interface Props {
  name: string;
  label: string;
}

const CheckboxFormik: React.FunctionComponent<Props> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);
  const [checked, setChecked] = useState(false);

  return (
    <div className='checkbox'>
      <label htmlFor={name}>
        {label}
        <input
          {...field}
          type='radio'
          checked={checked}
          onClick={() => {
            setChecked(!checked);
            helpers.setValue(checked);
          }}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CheckboxFormik;
