import { useState } from "react";
import { ComprobantesTable } from "../../components/organisms/comprobantesTable/ComprobantesTable";
import { ComprobanteForm } from "../../components/organisms/comprobanteForm/ComprobanteForm";
import "./comprobantes.css";

export const Comprobantes = ({ tipo }) => {
  const [selectedId, setSelectedId] = useState(null);
  const titulo =
    tipo === "factura" ? "Gestión de Facturas" : "Gestión de Presupuestos";

  return (
    <div>
      <div className="comprobantes-header">
        <h1>{titulo}</h1>
      </div>

      <ComprobanteForm
        tipo={tipo}
        selectedId={selectedId}
        onNew={() => setSelectedId(null)}
      />

      <ComprobantesTable tipo={tipo} onEdit={(id) => setSelectedId(id)} />
    </div>
  );
};
