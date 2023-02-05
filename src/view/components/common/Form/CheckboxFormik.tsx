import { useField } from 'formik';
import { useEffect, useState } from 'react';

interface Props {
  name: string;
  label: string;
}

const CheckboxFormik: React.FunctionComponent<Props> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    helpers.setValue(checked);
  }, [checked]);

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
