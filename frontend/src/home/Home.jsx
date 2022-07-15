import React, { useState, useEffect } from 'react';
import './home.css';

// componentes
import Buscar from '../componentes/Buscar';
import VistaFiltros from "../componentes/VistaFiltros";
import VistaProductos from '../componentes/VistaProductos';
import NoHayProductos from "../componentes/NoHayProductos";

// data
import { productos } from "../data";

const Home = () => {
  // estados
  const [listaDeProductos, setListaDeProductos] = useState(productos);
  const [stateFiltros, setStateFiltros] = useState({
    buscar: '',
    categoria: null,
    estrellas: null,
    precio: [0, 150]
  });
  const [stateNoProductos, setStateNoProductos] = useState(true);

  // método de filtrado
  function filtrado() {
    let productosFiltros = productos;
    
    // buscar
    if (stateFiltros.buscar) {
      productosFiltros = productosFiltros.filter(item => item.titulo.toLowerCase().search(stateFiltros.buscar.toLowerCase().trim()) !== -1);
    }

    // categorias
    if (stateFiltros.categoria) {
      productosFiltros = productosFiltros.filter(item => item.categoria === stateFiltros.categoria);
    }

    // puntuacion
    if (stateFiltros.estrellas) {
      productosFiltros = productosFiltros.filter(item => item.puntuacion === parseInt(stateFiltros.estrellas));
    }

    // Precio
    const minPrecio = stateFiltros.precio[0];
    const maxPrecio = stateFiltros.precio[1];
    productosFiltros = productosFiltros.filter(item => item.precio >= minPrecio && item.precio <= maxPrecio);

    // Mostrar NoHayPorductos
    if (!productosFiltros.length) {
      setStateNoProductos(false);
    } else {
      setStateNoProductos(true);
    }

    // cambiar estado
    setListaDeProductos(productosFiltros);
  }

  useEffect(() => {
    filtrado();
  }, [stateFiltros]);

  return (
    <div className='i-contenedor'>
      <Buscar 
        buscar={stateFiltros.buscar} 
        change={(e) => setStateFiltros({...stateFiltros, buscar: e.target.value })} 
      />

      <div className='i-row'>
        <div className='i-col'>
          <VistaFiltros
            stateCategorias={stateFiltros.categoria}
            changeCategorias={(e, valor) => setStateFiltros({...stateFiltros, categoria: valor})}
            stateEstrellas={stateFiltros.estrellas}
            changeEstrellas={(e, valor) => setStateFiltros({...stateFiltros, estrellas: valor})}
            statePrecio={stateFiltros.precio}
            changePrecio={(e, valor) => setStateFiltros({...stateFiltros, precio: valor})}
          />
        </div>
        <div className='i-col'>
          {
            stateNoProductos ? (<VistaProductos listaDeProductos={listaDeProductos} />) : (<NoHayProductos />)
          }
          
        </div>
      </div>
    </div>
  );
}

export default Home;