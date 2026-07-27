import { useEffect, useState } from "react";
import { ComprobanteRow } from "../../moleculas/comprobanteRow/ComprobanteRow";
import "./comprobantesTable.css";

export const ComprobantesTable = ({ tipo }) => {
  const [comprobantes, setComprobantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarComprobantes = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/comprobantes/listar/${tipo}`);
        if (!res.ok) throw new Error("Error cargando comprobantes");

        const data = await res.json();
        setComprobantes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarComprobantes();
  }, [tipo]);

  if (loading) return <div className="comprobantes-table">Cargando comprobantes...</div>;
  if (error) return <div className="comprobantes-table">Error: {error}</div>;

  return (
    <div className="comprobantes-table">
      <div className="table-header">
        <span>REFERENCIA</span>
        <span>CLIENTE</span>
        <span>FECHA</span>
        <span>IMPORTE</span>
        <span>ACCIONES</span>
      </div>

      <div className="table-body">
        {comprobantes.map((item) => (
          <ComprobanteRow
            key={item.id_comprobante}
            item={{
              ref: item.numero_documento,
              cliente: `${item.cliente_nombre} ${item.cliente_apellido}`,
              fecha: new Date(item.fecha_emision).toLocaleDateString("es-ES"),
              importe: `€${item.total.toFixed(2)}`,
              estado: item.estado,
              id: item.id_comprobante
            }}
            tipo={tipo}
          />
        ))}
      </div>
    </div>
  );
};
