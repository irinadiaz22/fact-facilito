import './comprobanteRow.css';

export const ComprobanteRow = ({ item, tipo, onVer }) => {
  return (
    <div className="table-row">
      <span>{item.ref}</span>
      <span>{item.cliente}</span>
      <span>{item.fecha}</span>
      <span>{item.importe}</span>

      <button className="convert-btn" onClick={onVer}>
          Ver comprobante
        </button>

      {tipo === "presupuesto" && (
        <button className="convert-btn">
          Convertir a Factura
        </button>
      )}

      {tipo === "factura" && (
        <button className="convert-btn">
          Convertir a PDF
        </button>
      )}
    </div>
  )
}
