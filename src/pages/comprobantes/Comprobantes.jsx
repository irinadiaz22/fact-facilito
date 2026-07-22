import { ComprobantesTable } from "../../components/organisms/comprobantesTable/ComprobantesTable";
import { ComprobanteForm } from "../../components/organisms/comprobanteForm/ComprobanteForm";
import './comprobantes.css'

export const Comprobantes = ({ tipo }) => {
  const titulo = tipo === "factura" ? "Gestión de Facturas" : "Gestión de Presupuestos"

  return (
    <div>
      <h1>{titulo}</h1>

      <ComprobanteForm tipo={tipo}/>

      <ComprobantesTable tipo={tipo} />
    </div>
  )
}
