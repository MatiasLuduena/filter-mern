import '../estilos/vistafiltros.css';

// MUI
import { ToggleButtonGroup, ToggleButton, Slider } from "@mui/material";

// data
import { categorias, puntuacion } from "../data";

const VistaFiltros = (props) => {

  const {
    stateCategorias,
    changeCategorias,
    stateEstrellas,
    changeEstrellas,
    statePrecio,
    changePrecio
  } = props;

  return (
    <div className='f-contenedor'>
      <div className='f-grupo'>
        <h3>Categorías</h3>
        <div className='f-button'>
          <ToggleButtonGroup exclusive value={stateCategorias} onChange={changeCategorias}>
            {
              categorias.map((item, index) => (
                <ToggleButton key={index} value={item.valor}>{item.valor}</ToggleButton>
              ))
            }
          </ToggleButtonGroup>
        </div>
      </div>

      <div className='f-grupo'>
        <h3>Puntuación</h3>
        <div className='f-button'>
          <ToggleButtonGroup exclusive value={stateEstrellas} onChange={changeEstrellas}>
            {
              puntuacion.map((item) => (
                <ToggleButton key={item.id} value={item.valor}>{item.label}</ToggleButton>
              ))
            }
          </ToggleButtonGroup>
        </div>
      </div>

      <div className='f-grupo'>
        <h3>Rango de precio</h3>
        <div className='f-buttom'>
          <Slider 
            min={0} max={150}
            valueLabelDisplay="auto"
            value={statePrecio}
            onChange={changePrecio}
          />
        </div>
      </div>
    </div>
  );
}

export default VistaFiltros;