import { useEffect, useState } from "react";
import BinIcon from "../../../../assets/icons/delete.svg";

export const ItemRow = ({ item, index, updateItem, removeItem, pagado }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/products/");
        const data = await res.json();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div className="item-row">

      {/* PRODUCTO */}
      <div className="item-field">
        <label>Producto/servicio</label>

        <select
          value={item.id_producto || ""}
          onChange={(e) => updateItem(index, "id_producto", Number(e.target.value))}
          disabled={pagado}
          style={{ opacity: pagado ? 0.5 : 1 }}
        >
          <option value="">Seleccionar...</option>

          {productos.map((prod) => (
            <option key={prod.id_product} value={prod.id_product}>
              {prod.id_product} – {prod.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* CANTIDAD */}
      <div className="item-field">
        <label>Cantidad</label>
        <input
          type="number"
          value={item.cantidad || 1}
          onChange={(e) => updateItem(index, "cantidad", Number(e.target.value))}
          disabled={pagado}
          style={{ opacity: pagado ? 0.5 : 1 }}
        />
      </div>

      {/* IVA */}
      <div className="item-field">
        <label>IVA (%)</label>
        <input
          type="number"
          value={item.iva || 21}
          onChange={(e) => updateItem(index, "iva", Number(e.target.value))}
          disabled={pagado}
          style={{ opacity: pagado ? 0.5 : 1 }}
        />
      </div>

      {/* PRECIO UNITARIO */}
      <div className="item-field">
        <label>Precio (€)</label>
        <input
          type="number"
          value={item.precio_unitario || 0}
          onChange={(e) => updateItem(index, "precio_unitario", Number(e.target.value))}
          disabled={pagado}
          style={{ opacity: pagado ? 0.5 : 1 }}
        />
      </div>

      {!pagado && (
        <button className="delete-item-btn" onClick={() => removeItem(index)} type="button">
          <img src={BinIcon} alt="Eliminar ítem" />
        </button>
      )}
    </div>
  );
};
