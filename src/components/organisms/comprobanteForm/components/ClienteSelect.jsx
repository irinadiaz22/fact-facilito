export const ClienteSelect = ({ value, onChange }) => {
  return (
    <div className="form-field">
      <label>Cliente</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Seleccionar cliente...</option>
        <option value="cliente1">Cliente 1</option>
        <option value="cliente2">Cliente 2</option>
      </select>

      <button className="new-client-btn">
        Nuevo cliente
      </button>
    </div>
  )
}
