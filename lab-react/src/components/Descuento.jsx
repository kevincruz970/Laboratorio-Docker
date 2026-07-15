import { useState } from 'react';

export default function Descuento() {
  const [precio, setPrecio] = useState('');
  const [descuento, setDescuento] = useState('');
  const [final, setFinal] = useState('');

  const calcular = () => {
    const p = parseFloat(precio);
    const d = parseFloat(descuento);
    if (isNaN(p) || isNaN(d) || d < 0 || d > 100) return setFinal('Valores inválidos');
    const valorDescontado = p - (p * (d / 100));
    setFinal(`Precio final: $${valorDescontado.toFixed(2)}`);
  };

  return (
    <div>
      <h4 className="text-success border-bottom pb-2">Calculadora de Descuento</h4>
      <input type="number" className="form-control mb-2" placeholder="Precio Original" 
             value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <input type="number" className="form-control mb-3" placeholder="Porcentaje de Descuento (%)" 
             value={descuento} onChange={(e) => setDescuento(e.target.value)} />
      <button className="btn btn-success mb-3 w-100" onClick={calcular}>Calcular Descuento</button>
      <div className="alert alert-success"><strong>Resultado:</strong> {final}</div>
    </div>
  );
}