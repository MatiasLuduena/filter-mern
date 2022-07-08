import React, { useState, useEffect } from 'react';
import './inicio.css';

// Componentes
import Buscar from '../components/Buscar';
import Filtro from '../components/Filtro';
import Lista from '../components/Lista';
import NoProductos from '../components/NoProductos';

// data
import { marcas, productos } from '../data/data';

const Inicio = () => {
  // Filtro component
  const [selectCategoria, setSelectCategoria] = useState(null);
  const [selectPuntuacion, setSelectPuntuacion] = useState(null);
  const [brand, setBrand] = useState(marcas);
  const [selectPrecio, setSelectPrecio] = useState([0, 100]);
  const [buscar, setBuscar] = useState('');
  const [noProducts, setNoProducts] = useState(false);

  function selectToggleC(evento, valor) {
    setSelectCategoria(valor);
  }

  function selectToggleP(evento, valor) {
    setSelectPuntuacion(valor);
  }

  function changeChecked(id) {
    const check = brand.map(item => item.id === id ? {...item ,checked: !item.checked} : item);
    setBrand(check);
  }

  function changePrecio(evento, valor) {
    setSelectPrecio(valor);
  }

  // Lista component
  const [lista, setLista] = useState(productos);

  function filtro() {
    let productosFiltrados = productos;

    // puntuación
    if (selectPuntuacion) {
      productosFiltrados = productosFiltrados.filter(item => parseInt(item.puntuacion) === parseInt(selectPuntuacion));
    }

    // Categorías
    if (selectCategoria) {
      productosFiltrados = productosFiltrados.filter(item => item.categoria === selectCategoria);
    }
    
    // Marcas ¿?

    // Precios
    const minPrecio = selectPrecio[0];
    const maxPrecio = selectPrecio[1];

    productosFiltrados = productosFiltrados.filter(item => item.precio >= minPrecio && item.precio <= maxPrecio);

    // Buscar input
    if (buscar) {
      productosFiltrados = productosFiltrados.filter(item => item.titulo.toLowerCase().search(buscar.toLowerCase().trim()) !== -1);
    }
    
    setLista(productosFiltrados);

    if (!productosFiltrados.length) {
      setNoProducts(false);
    } else {
      setNoProducts(true);
    }
  }

  useEffect(() => {
    filtro();
  }, [selectPuntuacion, selectCategoria, selectPrecio, buscar]);
  
  return (
    <div className='i-contenedor'>
      <Buscar buscar={buscar} changeBuscar={(e) => setBuscar(e.target.value)} />

      <div className='i-row'>
        <div className='i-col'>
          <Filtro 
            selectCategoria={selectCategoria} selectToggleC={selectToggleC}
            selectPuntuacion={selectPuntuacion} selectToggleP={selectToggleP}
            marcas={brand} changeChecked={changeChecked}
            changePrecio={changePrecio} selectPrecio={selectPrecio}
          />
        </div>
        <div className='i-col'>
          {
            noProducts ? (<Lista lista={lista} />) : (<NoProductos />)
          }
        </div>
      </div>
    </div>
  );
}

export default Inicio;