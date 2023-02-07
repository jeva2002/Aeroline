import { Formik } from 'formik';
import { format } from 'date-fns';
import SearchFlyForm from './Form/SearchFlyForm';

interface SearchFlyValues {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: string;
  discount: string;
}

const INITIAL_VALUES: SearchFlyValues = {
  origin: '---',
  destination: '---',
  departureDate: format(new Date(), 'yyyy-MM-dd'),
  returnDate: format(new Date().getTime() + 2.592e8, 'yyyy-MM-dd'),
  passengers: '1 Adulto',
  discount: '--- --- ---',
};

const SearchFly: React.FunctionComponent = (props) => {
  return (
    <section className='modal shadow-md md:w-2/5 w-full' id='searchFly'>
      <h1 className='text-3xl font-bold' >Busca un nuevo destino y comienza la aventura.</h1>
      <p className='text-slate-500' >Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <SearchFlyForm />
      </Formik>
    </section>
  );
};

export default SearchFly;
