import { useEffect, useState } from "react";
import { ClienteRow } from "../../moleculas/clienteRow/ClienteRow";
import "./tablaClientes.css";

export const TablaClientes = () => {
  const [clientes, setClientes] = useState([]);

  // Cargar clientes al montar la tabla
  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    const res = await fetch("http://127.0.0.1:8000/clients/");
    const data = await res.json();
    setClientes(data);
  };

  const borrarCliente = async (dni) => {
    const res = await fetch(`http://127.0.0.1:8000/clients/${dni}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setClientes(clientes.filter((c) => c.dni !== dni));
    }
  };

  return (
    <div className="tabla-clientes-container">
      <table className="tabla-clientes">
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Ciudad</th>
            <th>Código Postal</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <ClienteRow
              key={cliente.dni}
              cliente={cliente}
              onDelete={borrarCliente}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
