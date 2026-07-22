export const ActionButtons = ({ tipo }) => {
  return (
    <div className="form-buttons">

      <button className="btn-primary">
        Guardar {tipo === "factura" ? "Factura" : "Presupuesto"}
      </button>

      {tipo === "presupuesto" && (
        <button className="btn-secondary">
          Convertir a Factura
        </button>
      )}

      <button className="btn-secondary">Enviar por Email</button>
      <button className="btn-secondary">Descargar PDF</button>

    </div>
  )
}
