import "../estilos/buscar.css";
import { Search } from "@mui/icons-material";

const Buscar = ({buscar, change}) => {
  return (
    <div className='b-contenedor'>
      <div className='b-icon'>
        <Search fontSize='medium' />
      </div>
      <input type='text' placeholder='Buscar...' value={buscar} onChange={change} />
    </div>
  );
}

export default Buscar;