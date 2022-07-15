import '../estilos/vistaproductos.css';

const VistaProductos = ({listaDeProductos}) => {
  return (
    <div className="l-contenedor">
      {
        listaDeProductos.map((item, index) => (
          <div className="l-card" key={index}>
            <div className="lc-header">
              <img src={item.imagen} alt={item.titulo} />
            </div>
            <div className="lc-body">
              <div className='lc-b_top'>
                <span>{item.titulo}</span>
              </div>
              <div className='lc-b_bottom'>
                <span>{item.categoria}</span>
              </div>
            </div>
            <div className="lc-footer">
              <span>{item.puntuacion}★</span>
              <span>${parseFloat(item.precio).toFixed(2)}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default VistaProductos;