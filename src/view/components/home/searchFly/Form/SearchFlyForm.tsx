import { Form } from 'formik';
import * as React from 'react';
import TextFieldFormik from '../../../common/Form/TextFieldFormik';
import PlaceInput from './PlaceInput';

const SearchFlyForm: React.FunctionComponent = (props) => {
  return (
    <Form className='flex flex-col gap-3' >
      <div className='flex gap-2 justify-evenly'>
        <PlaceInput name='origin' label='Origen' />
        <PlaceInput name='destination' label='Destino' />
      </div>
      <div className='flex gap-2 justify-evenly'>
        <TextFieldFormik
          label='Salida'
          name='departureDate'
          type='date'
          className='text-field-home'
        />
        <TextFieldFormik
          label='Regreso'
          name='returnDate'
          type='date'
          className='text-field-home'
        />
      </div>
      <TextFieldFormik label='¿Tienes un código de promoción?' name='discount' />
    </Form>
  );
};

export default SearchFlyForm;
