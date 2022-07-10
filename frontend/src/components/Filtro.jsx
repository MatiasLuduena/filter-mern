import React, { useState, useEffect } from 'react';
import '../styles/filtro.css';
import axios from 'axios';

// MUI
import { 
  ToggleButton, ToggleButtonGroup, FormControlLabel, Checkbox, Slider 
} from '@mui/material';

// data
import { puntuacion } from '../data/data';

const Filtro = ({
  selectCategoria, selectToggleC,
  selectPuntuacion, selectToggleP, 
  changeChecked, marcas,
  changePrecio, selectPrecio
}) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchCategorias() {
      const cLista = await axios.get('/api/categorias');
      setCategorias(cLista.data);
    }
    fetchCategorias();

    async function fetchProductos() {
      const plista = await axios.get('/api/productos');
      setProductos(plista.data);
    }
    fetchProductos();
  }, []);

  // Max Precio
  let maxPrecioArray = [];

  productos.forEach(({precio}) => {
    maxPrecioArray.push(precio);
  });
  
  const maxPrecio = maxPrecioArray.reduce((a, b) => {
    return Math.max(a, b);
  }, 0);

  return (
    <div className='f-contenedor'>
      <div className='f-grupo'>
        <h3>Categorías</h3>
        <div className='f-button'>
          <ToggleButtonGroup value={selectCategoria} onChange={selectToggleC} exclusive>
            {
              categorias.map((item, index) => (
                <ToggleButton key={index} value={item.valor}>{item.label}</ToggleButton>
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
              marcas.map((item, index) => (
                <FormControlLabel key={index}
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
            min={0} max={maxPrecio} onChange={changePrecio} 
            value={selectPrecio} valueLabelDisplay="auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Filtro;