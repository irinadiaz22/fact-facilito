import { useNavigate } from "react-router-dom";

export const ActionButtons = ({ tipo, form, onNew }) => {
  const navigate = useNavigate();

  const enviarComprobante = async (tipoComprobante) => {
    try {
      const payload = {
        documento: {
          dni: form.dni,
          tipo_comprobante: tipoComprobante,
          descuento: 0,
          estado: form.estado?.toLowerCase(),
          forma_pago: form.forma_pago,
          nota: form.notas || "",
          fecha_emision: form.fecha_emision || new Date().toISOString(),
          fecha_pago: form.pagado ? new Date().toISOString() : null,
        },

        detalles: form.items.map((item) => ({
          id_producto: Number(item.id_producto),
          descripcion: item.descripcion || "",
          cantidad: Number(item.cantidad),
          precio_unitario: Number(item.precio_unitario),
          iva: Number(item.iva),
        })),
      };

      console.log("PAYLOAD ENVIADO:", payload);

      const res = await fetch(
        "http://127.0.0.1:8000/comprobantes/crear_comprobante_completo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("ERROR 422:", errorText);
        alert("Error al crear comprobante");
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      alert("Error al guardar comprobante");
      return false;
    }
  };

  const guardarComprobante = async () => {
    const success = await enviarComprobante(tipo);
    if (!success) return;

    alert("Comprobante creado correctamente");
    navigate("/Comprobantes");
  };

  const convertirAFactura = async () => {
    const success = await enviarComprobante("factura");
    if (!success) return;

    alert("Factura creada correctamente desde el presupuesto");
    navigate("/Comprobantes");
  };

  return (
    <div className="form-buttons">
      <button className="btn-secondary" type="button" onClick={onNew}>
        Nuevo comprobante
      </button>

      <button
        className="btn-primary"
        onClick={guardarComprobante}
        type="button"
      >
        Guardar {tipo === "factura" ? "Factura" : "Presupuesto"}
      </button>

      <div className="secondary-buttons">
        <button className="btn-secondary" type="button">
          Enviar por Email
        </button>
        <button className="btn-secondary" type="button">
          Descargar PDF
        </button>
      </div>

      {tipo === "presupuesto" && (
        <button className="btn-convertir" type="button" onClick={convertirAFactura}>
          Convertir a Factura
        </button>
      )}
    </div>
  );
};
