import { useEffect, useState } from "react";

export const ClienteSelect = ({ dni, onChange }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/clients/");
        const data = await res.json();
        setClientes(data);
      } catch (error) {
        console.error("Error cargando clientes:", error);
      }
    };

    cargarClientes();
  }, []);

  const handleSelect = (e) => {
    const dniSeleccionado = e.target.value;

    const cliente = clientes.find((c) => c.dni === dniSeleccionado);

    const nombreCompleto = cliente
      ? `${cliente.nombre} ${cliente.apellidos}`
      : "";

    // Enviamos ambos valores al formulario
    onChange(dniSeleccionado, nombreCompleto);
  };

  return (
    <div className="form-field">
      <label>DNI de Cliente</label>

      <select value={dni || ""} onChange={handleSelect}>
        <option value="">Seleccionar DNI de cliente...</option>

        {clientes.map((cli) => (
          <option key={cli.dni} value={cli.dni}>
            {cli.dni}
          </option>
        ))}
      </select>
    </div>
  );
};
