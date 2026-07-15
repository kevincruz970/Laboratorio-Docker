import { useState } from 'react';

export default function Conversor() {
  const [dolares, setDolares] = useState('');
  const [resultado, setResultado] = useState('');

  const convertir = (tasa, moneda) => {
    if (!dolares || isNaN(dolares)) return setResultado('Ingrese un valor válido');
    setResultado(`Equivale a ${(dolares * tasa).toFixed(2)} ${moneda}`);
  };

  return (
    <div>
      <h4 className="text-primary border-bottom pb-2">Conversor de Divisas</h4>
      <input type="number" className="form-control mb-3" placeholder="Cantidad en USD" 
             value={dolares} onChange={(e) => setDolares(e.target.value)} />
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={() => convertir(0.92, 'Euros (€)')}>A Euros</button>
        <button className="btn btn-secondary" onClick={() => convertir(3900, 'Pesos Colombianos (COP)')}>A Pesos COP</button>
      </div>
      <div className="alert alert-info"><strong>Resultado:</strong> {resultado}</div>
    </div>
  );
}