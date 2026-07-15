import { useState } from 'react';
import Conversor from './components/Conversor';
import Descuento from './components/Descuento';
import Password from './components/Password';
import Edad from './components/Edad';

function App() {
  const [vista, setVista] = useState('conversor');

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 px-3 rounded">
        <span className="navbar-brand fw-bold">Kevin Cruz - React Tools</span>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-light btn-sm" onClick={() => setVista('conversor')}>Divisas</button>
          <button className="btn btn-outline-light btn-sm" onClick={() => setVista('descuento')}>Descuentos</button>
          <button className="btn btn-outline-light btn-sm" onClick={() => setVista('password')}>Contraseñas</button>
          <button className="btn btn-outline-light btn-sm" onClick={() => setVista('edad')}>Edad</button>
        </div>
      </nav>

      <div className="card shadow-sm">
        <div className="card-body">
          {vista === 'conversor' && <Conversor />}
          {vista === 'descuento' && <Descuento />}
          {vista === 'password' && <Password />}
          {vista === 'edad' && <Edad />}
        </div>
      </div>
    </div>
  );
}

export default App;