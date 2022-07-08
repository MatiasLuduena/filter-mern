import '../styles/buscar.css';

// Icon
import { Search } from '@mui/icons-material';

const Buscar = ({changeBuscar, buscar}) => {
  return (
    <div className='b-contenedor'>
      <div className='b-icon'>
        <Search fontSize='medium' />
      </div>
      <input type='text' placeholder='Buscar...' onChange={changeBuscar} value={buscar} />
    </div>
  );
}

export default Buscar;