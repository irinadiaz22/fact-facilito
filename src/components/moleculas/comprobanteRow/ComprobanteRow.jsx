import './comprobanteRow.css';

export const ComprobanteRow = ({ item, tipo }) => {
  return (
    <div className="table-row">
      <span>{item.ref}</span>
      <span>{item.cliente}</span>
      <span>{item.fecha}</span>
      <span>{item.importe}</span>

      {tipo === "presupuesto" && (
        <button className="convert-btn">
          Convertir a Factura
        </button>
      )}
    </div>
  )
}
