export const FechaInputs = ({ fechaEmision, fechaVencimiento, onChange }) => {
  return (
    <div className="form-field-group">
      
      <div className="form-field">
        <label>Fecha de emisión</label>
        <input
          type="date"
          value={fechaEmision}
          onChange={(e) => onChange("fecha_emision", e.target.value)}
        />
      </div>
      <br></br>
      <div className="form-field">
        <label>Fecha de vencimiento</label>
        <input
          type="date"
          value={fechaVencimiento}
          onChange={(e) => onChange("fecha_vencimiento", e.target.value)}
        />
      </div>

    </div>
  )
}
