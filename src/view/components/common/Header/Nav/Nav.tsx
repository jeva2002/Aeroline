import './Nav.scss';
import toggle from '../../../../../assets/icons/toggle.svg';
import Link from './Link';
import Select from './Select';
import { useState } from 'react';

const Nav: React.FunctionComponent = (props) => {
  const [showOptions, SetShowOptions] = useState(false);

  return (
    <nav className='nav bg-slate-100 flex flex-col md:flex-row-reverse md:justify-between justify-end lg:px-32 pt-2 '>
      <div
        className='toggle pl-7 pt-3 pb-2'
        onClick={() => SetShowOptions(!showOptions)}
      >
        <img className='w-9 h-9' src={toggle} alt='toggle' />
      </div>
      <div className='nav-links secondary-links'>
        <Select />
        <Link text='Nuestros destinos' route='' />
        <Link text='Promociones' route='' />
        <Link text='Privacidad' route='' />
        <Link text='Contacto' route='' />
      </div>
      <div className='nav-links main-links' id={showOptions ? 'show' : ''}>
        <Link text='Vuelos' route='/' mainLink={true} />
        <Link text='Vuelo + Hotel' route='/hospedaje' mainLink={true} />
        <Link text='Mi Reserva' route='/reserva' mainLink={true} />
        <Link text='Pase de abordar' route='/pase' mainLink={true} />
        <Link text='Estatus de vuelo' route='/estatus' mainLink={true} />
      </div>
    </nav>
  );
};

export default Nav;
