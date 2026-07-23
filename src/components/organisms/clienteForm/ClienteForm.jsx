import { useState } from "react";
import "./clienteForm.css";
import MicroIcon from "../../../assets/icons/microphene.svg";

export const ClienteForm = () => {
  const [cliente, setCliente] = useState({
    dni: "",
    nombre: "",
    apellidos: "",
    direccion: "",
    ciudad: "",
    codigo_postal: "",
    telefono: "",
    email: "",
    fecha_registro: "",
  });

  const updateField = (field, value) => {
    setCliente({ ...cliente, [field]: value });
  };

  return (
    <div className="form-container-cli">
      <div className="form-header-cli">
        <div>
          <h1 className="form-title-cli">Gestión de clientes</h1>
          <h2 className="form-subtitle-cli">Crear cliente nuevo</h2>
        </div>

        <button className="voice-btn" type="button">
          <img src={MicroIcon} alt="Dictado por voz" />
          <span>Crear cliente por voz</span>
        </button>
      </div>

      {/* GRID */}
      <div className="from-grid-cli">
        <div className="from-grid-cli-1">
          <div className="form-field-cli">
            <label>DNI / CIF</label>
            <input
              type="text"
              value={cliente.dni}
              placeholder="12345678X"
              onChange={(e) => updateField("dni", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Nombre</label>
            <input
              type="text"
              value={cliente.nombre}
              placeholder="Juan"
              onChange={(e) => updateField("nombre", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Apellidos</label>
            <input
              type="text"
              value={cliente.apellidos}
              placeholder="Perez Lopez"
              onChange={(e) => updateField("apellidos", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Direccion</label>
            <input
              type="text"
              value={cliente.direccion}
              placeholder="Calle, numero, piso"
              onChange={(e) => updateField("direccion", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Email</label>
            <input
              type="email"
              value={cliente.email}
              placeholder="cliente@ejemplo.com"
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>
        </div>

        <div className="from-grid-cli-2">
          <div className="form-field-cli">
            <label>Ciudad</label>
            <input
              type="text"
              value={cliente.ciudad}
              placeholder="Madrid"
              onChange={(e) => updateField("ciudad", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Código postal</label>
            <input
              type="text"
              value={cliente.codigo_postal}
              placeholder="28850"
              onChange={(e) => updateField("codigo_postal", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Teléfono</label>
            <input
              type="text"
              value={cliente.telefono}
              placeholder="622622012"
              onChange={(e) => updateField("telefono", e.target.value)}
            />
          </div>
          <div className="form-field-cli">
            <label>Fecha de registro</label>
            <input
              type="date"
              value={cliente.fecha_registro}
              onChange={(e) => updateField("fecha_registro", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/*Botones*/}
      <div className="form-buttons-cli">
        <button className="btn-primary">Guardar Cliente</button>
        <button className="btn-secondary">Cancelar</button>
      </div>
    </div>
  );
};
