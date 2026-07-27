export const ClienteRow = ({ cliente, onDelete }) => {
  return (
    <tr className="fila-cliente">
      <td>{cliente.dni}</td>
      <td>{cliente.nombre}</td>
      <td>{cliente.apellidos}</td>
      <td>{cliente.direccion}</td>
      <td>{cliente.telefono}</td>
      <td>{cliente.email}</td>
      <td>{cliente.ciudad}</td>
      <td>{cliente.codigo_postal}</td>

      <td>
        <button
          className="btn-delete-cli"
          onClick={() => onDelete(cliente.dni)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};
