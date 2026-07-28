import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MicroIcon from "../../../assets/icons/microphene.svg";
import "./productoForm.css";

export const ProductoForm = () => {
  const [producto, setProducto] = useState([]);
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");

  const updateField = (field, value) => {
    setProducto({ ...producto, [field]: value });
  };

  const guardarProducto = async() => {
    try {
      const res = await fetch("http://127.0.0.1:8000/products/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(producto),
      });
      if (!res.ok) {
        throw new Error ("Error al crear el producto");
      }

      const data = await res.json();
      setMensaje("Producto creado correctamente");

      setProducto({
        nombre: "",
        tipo: "",
        precio_unitario: 0,
        iva: 21,
        fecha_registro: ""
      });

      setTimeout(() => {
        navigate("/productos");
      }, 1000);
    } catch (error) {
      console.error(error);
      setMensaje("Error al crear el producto");
    }
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
        <button className="btn-primary-cli" onClick={guardarProducto}>
          Guardar Producto</button>
          {mensaje && (
            <p style={{color: "green", marginTop: "10px"}}>{mensaje}</p>
          )}
        <button className="btn-secondary-cli">Cancelar</button>
        
      </div>
    </div>
  );
};
