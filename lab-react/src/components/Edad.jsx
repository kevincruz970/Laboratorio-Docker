import { useState } from 'react';

export default function Edad() {
  const [fecha, setFecha] = useState('');
  const [edad, setEdad] = useState('');

  const calcularEdad = () => {
    if (!fecha) return setEdad('Seleccione una fecha');
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let anios = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      anios--;
    }
    setEdad(`Tienes ${anios} años.`);
  };

  return (
    <div>
      <h4 className="text-warning border-bottom pb-2">Calculadora de Edad</h4>
      <input type="date" className="form-control mb-3" 
             value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <button className="btn btn-warning mb-3 w-100 fw-bold" onClick={calcularEdad}>Calcular Edad</button>
      <div className="alert alert-warning text-dark"><strong>Resultado:</strong> {edad}</div>
    </div>
  );
}