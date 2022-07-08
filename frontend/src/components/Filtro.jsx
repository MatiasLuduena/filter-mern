import '../styles/filtro.css';

// MUI
import { 
  ToggleButton, ToggleButtonGroup, FormControlLabel, Checkbox, Slider 
} from '@mui/material';

// data
import { categorias, puntuacion } from '../data/data';

const Filtro = ({
  selectCategoria, selectToggleC,
  selectPuntuacion, selectToggleP, 
  changeChecked, marcas,
  changePrecio, selectPrecio
}) => {
  return (
    <div className='f-contenedor'>
      <div className='f-grupo'>
        <h3>Categorías</h3>
        <div className='f-button'>
          <ToggleButtonGroup value={selectCategoria} onChange={selectToggleC} exclusive>
            {
              categorias.map((item) => (
                <ToggleButton key={item.id} value={item.valor}>{item.label}</ToggleButton>
              ))
            }
          </ToggleButtonGroup>
        </div>
      </div>

      <div className='f-grupo'>
        <h3>Puntuación</h3>
        <div className='f-button'>
          <ToggleButtonGroup value={selectPuntuacion} onChange={selectToggleP} exclusive>
            {
              puntuacion.map((item) => (
                <ToggleButton key={item.id} value={item.valor}>{item.label}</ToggleButton>
              ))
            }
          </ToggleButtonGroup>
        </div>
      </div>

      <div className='f-group'>
        <h3>Marca</h3>
        <div className='f-button'>
            {
              marcas.map((item) => (
                <FormControlLabel key={item.id}
                  control={<Checkbox/>}
                  checked={item.checked} label={item.label} 
                  onChange={() => changeChecked(item.id)} 
                />
              ))
            }
        </div>
      </div>

      <div className='f-group'>
        <h3>Rango de precio</h3>
        <div className='f-buttom'>
          <Slider 
            min={0} max={100} onChange={changePrecio} 
            value={selectPrecio} valueLabelDisplay="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Filtro;