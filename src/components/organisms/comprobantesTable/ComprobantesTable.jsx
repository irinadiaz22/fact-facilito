import { ComprobanteRow } from '../../moleculas/comprobanteRow/ComprobanteRow';

import "./comprobantesTable.css";

export const ComprobantesTable = ({ tipo }) => {

  // Datos hardcodeados por ahora
  const data = [
    { ref: "FAC-2024-012", cliente: "Innovatech Solutions", fecha: "15 Oct 2024", importe: "€1,240.00" },
    { ref: "FAC-2024-011", cliente: "Marta Sánchez", fecha: "13 Oct 2024", importe: "€980.00" },
    { ref: "FAC-2024-010", cliente: "Talleres Martínez", fecha: "10 Oct 2024", importe: "€1,750.00" },
    { ref: "PRE-2024-015", cliente: "Global Logistics S.A.", fecha: "09 Oct 2024", importe: "€3,200.00" },
    { ref: "PRE-2024-014", cliente: "Estudio de Diseño Creativo", fecha: "08 Oct 2024", importe: "€1,850.00" },
  ]

  return (
    <div className="comprobantes-table">

      <div className="table-header">
        <span>REFERENCIA</span>
        <span>CLIENTE</span>
        <span>FECHA</span>
        <span>IMPORTE</span>
        {tipo === "presupuesto" && <span>ACCIONES</span>}
      </div>

      <div className="table-body">
        {data.map((item, index) => (
          <ComprobanteRow key={index} item={item} tipo={tipo} />
        ))}
      </div>

    </div>
  )
}
