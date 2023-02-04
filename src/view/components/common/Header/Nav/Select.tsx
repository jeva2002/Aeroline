const Select: React.FunctionComponent = (props) => {
  return (
    <div className='select-container'>
      <select className='select'>
        <option value=''>Tu guía de viaje</option>
        <option value='Cambio de vuelo'>Cambio de vuelo</option>
        <option value='Política de equipaje'>Política de equipaje</option>
        <option value='Servicios adicionales'>Servicios adicionales</option>
        <option value='Formas de pago'>Formas de pago</option>
        <option value='Ver más'>Ver más</option>
      </select>
    </div>
  );
};

export default Select;
