import { useState } from 'react';

export default function Password() {
  const [longitud, setLongitud] = useState(8);
  const [pass, setPass] = useState('');

  const generar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let result = '';
    for (let i = 0; i < longitud; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPass(result);
  };

  return (
    <div>
      <h4 className="text-danger border-bottom pb-2">Generador de Contraseñas</h4>
      <label>Longitud: {longitud}</label>
      <input type="range" className="form-range mb-3" min="6" max="20" 
             value={longitud} onChange={(e) => setLongitud(e.target.value)} />
      <button className="btn btn-danger mb-3 w-100" onClick={generar}>Generar Contraseña</button>
      <div className="alert alert-danger fw-bold text-center fs-5">{pass || '---'}</div>
    </div>
  );
}