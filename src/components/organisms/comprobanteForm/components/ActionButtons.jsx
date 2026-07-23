export const ActionButtons = ({ tipo }) => {
  return (
    <div className="form-buttons">
      <button className="btn-primary">
        Guardar {tipo === "factura" ? "Factura" : "Presupuesto"}
      </button>
      <div className="secondary-buttons">
      <button className="btn-secondary">Enviar por Email</button>
      <button className="btn-secondary">Descargar PDF</button>
      </div>
      {tipo === "presupuesto" && (
        <button className="btn-convertir">Convertir a Factura</button>
      )}
    </div>

  );
};
