import { useState } from "react";
import MicroIcon from "../../../assets/icons/microphene.svg";
import "./productoForm.css";

export const ProductoForm = () => {
  const [producto, setProducto] = useState({
    id_producto: "",
    nombre: "",
    tipo: "inventario",
    iva: 21,
    precio: 0,
  });

  const updateField = (field, value) => {
    setProducto({ ...producto, [field]: value });
  };

  return (
    <div className="form-container-pro">

      {/* HEADER */}
      <div className="form-header-pro">
        <div>
          <h1 className="form-title-pro">Gestión de productos</h1>
          <h2 className="form-subtitle-pro">Crear producto nuevo</h2>
        </div>

        <button className="voice-btn" type="button">
          <img src={MicroIcon} alt="Dictado por voz" />
          <span>Crear producto por voz</span>
        </button>
      </div>

      {/* GRID */}
      <div className="form-grid">

        {/* Nombre */}
        <div className="form-field-pro">
          <label>Nombre</label>
          <input
            type="text"
            value={producto.nombre}
            placeholder="Ej. Servicio de limpieza"
            onChange={(e) => updateField("nombre", e.target.value)}
          />
        </div>

        {/* Tipo */}
        <div className="form-field-pro">
          <label>Tipo</label>
          <select
            value={producto.tipo}
            onChange={(e) => updateField("tipo", e.target.value)}
          >
            <option value="inventario">Inventario</option>
            <option value="servicio">Servicio</option>
          </select>
        </div>

        {/* IVA */}
        <div className="form-field-pro">
          <label>IVA (%)</label>
          <input
            type="number"
            value={producto.iva}
            onChange={(e) => updateField("iva", e.target.value)}
          />
        </div>

        {/* Precio */}
        <div className="form-field-pro">
          <label>Precio (€)</label>
          <input
            type="number"
            value={producto.precio}
            placeholder="0.00"
            onChange={(e) => updateField("precio", e.target.value)}
          />
        </div>

      </div>

      {/* BOTONES */}
      <div className="form-buttons-pro">
        <button className="btn-primary-cli">Guardar Producto</button>
        <button className="btn-secondary-cli">Cancelar</button>
        
      </div>
    </div>
  );
};
