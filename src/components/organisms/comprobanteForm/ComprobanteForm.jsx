import { useEffect, useState } from "react";
import "./comprobanteForm.css";

// Components
import { ClienteSelect } from "./components/ClienteSelect";
import { EstadoSelect } from "./components/EstadoSelect";
import { FechaInputs } from "./components/FechaInputs";
import { ItemsTable } from "./components/ItemsTable";
import { NotasTextarea } from "./components/NotasTextarea";
import { Totales } from "./components/Totales";
import { ActionButtons } from "./components/ActionButtons";
import { PaymentMethods } from "./components/PaymentMethods";
import { PaidToggle } from "./components/PaidToggle";

const initialFormState = {
  id_comprobante: null,
  dni: "",
  cliente_nombre: "",
  fecha_emision: "",
  fecha_vencimiento: "",
  numero: "",
  estado: "Pendiente",
  pagado: false,
  items: [],
  notas: "",
  forma_pago: "tarjeta",
};

export const ComprobanteForm = ({ tipo, selectedId, onNew }) => {
  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedId) {
      setForm(initialFormState);
      setError(null);
      setLoading(false);
      return;
    }

    const cargarComprobante = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `http://127.0.0.1:8000/comprobantes/obtener/${selectedId}`,
        );
        if (!res.ok) {
          throw new Error("No se pudo cargar el comprobante");
        }

        const data = await res.json();

        setForm({
          id_comprobante: data.id_comprobante || selectedId,
          dni: data.dni || data.cliente_dni || "",
          cliente_nombre: data.cliente_nombre || "",
          fecha_emision: data.fecha_emision || "",
          fecha_vencimiento: data.fecha_vencimiento || "",
          numero: data.numero_documento || data.numero || "",
          estado: data.estado || "Pendiente",
          pagado: Boolean(data.pagado),
          items: Array.isArray(data.detalles)
            ? data.detalles.map((detalle) => ({
                id_producto: detalle.id_producto || detalle.producto_id || "",
                descripcion: detalle.descripcion || "",
                cantidad: detalle.cantidad || 1,
                precio_unitario: detalle.precio_unitario || detalle.precio || 0,
                iva: detalle.iva || 21,
              }))
            : [],
          notas: data.nota || data.notas || "",
          forma_pago: data.forma_pago || "tarjeta",
        });
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarComprobante();
  }, [selectedId]);

  if (loading) {
    return <div className="form-container">Cargando comprobante...</div>;
  }

  if (error) {
    return <div className="form-container">Error: {error}</div>;
  }

  // Actualizar campos simples
  const updateField = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  // Añadir ítem
  const addItem = () => {
    setForm({
      ...form,
      items: [
        ...form.items,
        {
          id_producto: "",
          descripcion: "",
          cantidad: 1,
          iva: 21,
          precio_unitario: 0,
          total_linea: 0,
        },
      ],
    });
  };

  // Actualizar ítem
  const updateItem = (index, field, value) => {
    const items = [...form.items];
    items[index][field] = value;

    // Recalcular total línea
    if (["precio_unitario", "iva", "cantidad"].includes(field)) {
      const precio = parseFloat(items[index].precio_unitario || 0);
      const iva = parseFloat(items[index].iva || 0);
      const cantidad = parseFloat(items[index].cantidad || 1);
      items[index].total_linea = cantidad * precio * (1 + iva / 100);
    }

    setForm({ ...form, items });
  };

  // Eliminar ítem
  const removeItem = (index) => {
    const items = form.items.filter((_, i) => i !== index);
    setForm({ ...form, items });
  };

  return (
    <div className="form-container">
      {/* Título */}
      <h1 className="form-title">
        {tipo === "factura" ? "Nueva Factura" : "Nuevo Presupuesto"}
      </h1>

      {/* GRID DE 3 COLUMNAS */}
      <div className="form-grid-3">
        {/* Columna 1 */}
        <div className="form-column">
          <ClienteSelect
            dni={form.dni}
            onChange={(dni, nombreCompleto) => {
              updateField("dni", dni);
              updateField("cliente_nombre", nombreCompleto);
            }}
          />

          <div className="form-field">
            <label>Cliente</label>
            <input type="text" value={form.cliente_nombre} readOnly />
          </div>

          <div className="form-field">
            <label>Número de comprobante</label>
            <input
              type="text"
              value={form.numero}
              placeholder={tipo === "factura" ? "FAC-2024-001" : "PRE-2024-001"}
              onChange={(e) => updateField("numero", e.target.value)}
            />
          </div>
        </div>
        {/* Columna 2 */}
        <div className="form-column">
          <EstadoSelect
            tipo={tipo}
            value={form.estado}
            onChange={(v) => updateField("estado", v)}
          />

          <FechaInputs
            fechaEmision={form.fecha_emision}
            fechaVencimiento={form.fecha_vencimiento}
            onChange={updateField}
          />
        </div>

        {/* Columna 3 */}
        <div className="form-column">
          {/* Totales */}
          <Totales items={form.items} />

          {/* Botones */}
          <ActionButtons tipo={tipo} form={form} onNew={onNew} />
        </div>

        {/* Ítems en 2 columnas */}
        <div className="items-wrapper">
          <ItemsTable
            items={form.items}
            addItem={addItem}
            updateItem={updateItem}
            removeItem={removeItem}
            pagado={form.pagado}
          />
        </div>

        <div>
          {tipo === "factura" && (
            <PaidToggle
              value={form.pagado}
              onChange={(v) => updateField("pagado", v)}
            />
          )}

          <PaymentMethods
            value={form.forma_pago}
            onChange={(metodo) => updateField("forma_pago", metodo)}
          />

          {/* Notas */}
          <NotasTextarea
            value={form.notas}
            onChange={(v) => updateField("notas", v)}
          />
        </div>
      </div>
    </div>
  );
};
