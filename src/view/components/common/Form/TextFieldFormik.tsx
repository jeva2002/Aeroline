import { useField, Field } from 'formik';
import { capitalize } from '../../../../model/services';

interface Props {
  name: string;
  label: string;
  type?: string;
}

const TextFielFormik: React.FunctionComponent<Props> = ({
  name,
  label,
  type,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className='text-input'>
      <label htmlFor={name}>
        {capitalize(label)}
        <input
          {...field}
          type={type ?? 'text'}
          placeholder={capitalize(label)}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextFielFormik;
