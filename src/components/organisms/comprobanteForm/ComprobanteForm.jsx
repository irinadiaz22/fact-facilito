import { useState } from "react";
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

export const ComprobanteForm = ({ tipo }) => {
  const [form, setForm] = useState({
    cliente: "",
    fecha_emision: "",
    fecha_vencimiento: "",
    numero: "",
    estado: "Pendiente",
    pagado: false,
    items: [],
    notas: "",
  });

  // Actualizar campos simples
  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Añadir ítem
  const addItem = () => {
    setForm({
      ...form,
      items: [
        ...form.items,
        {
          nombre_producto: "",
          cantidad: 1,
          iva: 21,
          precio: 0,
          total_linea: 0,
          descripcion: "",
        },
      ],
    });
  };

  // Actualizar ítem
  const updateItem = (index, field, value) => {
    const items = [...form.items];
    items[index][field] = value;

    // Recalcular total línea
    if (["precio", "iva", "cantidad"].includes(field)) {
      const precio = parseFloat(items[index].precio || 0);
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
            value={form.cliente}
            onChange={(v) => updateField("cliente", v)}
          />

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
          <ActionButtons tipo={tipo} />
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

          <PaymentMethods />

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
