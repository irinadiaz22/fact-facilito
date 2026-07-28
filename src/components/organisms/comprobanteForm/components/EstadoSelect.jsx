export const EstadoSelect = ({ tipo, value, onChange }) => {

  const estadosFactura = ["Pendiente", "Pagada", "Anulada"]
  const estadosPresupuesto = ["Pendiente", "Aceptado", "Anulado"]

  const estados = tipo === "factura" ? estadosFactura : estadosPresupuesto

  return (
    <div className="form-field">
      <label>Estado</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {estados.map(e => (
          <option key={e} value={e}>{e}</option>
        ))}
      </select>
    </div>
  )
}
