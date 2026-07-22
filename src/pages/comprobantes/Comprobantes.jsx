import { ComprobantesTable } from "../../components/organisms/comprobantesTable/ComprobantesTable";
import './comprobantes.css'

export const Comprobantes = ({ tipo }) => {
  const titulo = tipo === "factura" ? "Facturas" : "Presupuestos"

  return (
    <div>
      <h1>{titulo}</h1>

      <ComprobantesTable tipo={tipo} />
    </div>
  )
}
