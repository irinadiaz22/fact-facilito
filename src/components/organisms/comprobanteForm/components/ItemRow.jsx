import BinIcon from "../../../../assets/icons/delete.svg";

export const ItemRow = ({ item, index, updateItem, removeItem }) => {
  return (
    <div className="item-row">

      <div className="item-field">
        <label>Producto/servicio</label>
        <input
          type="text"
          value={item.nombre_producto}
          onChange={(e) => updateItem(index, "nombre_producto", e.target.value)}
        />
      </div>

      <div className="item-field">
        <label>Cantidad</label>
        <input
          type="number"
          value={item.cantidad}
          onChange={(e) => updateItem(index, "cantidad", e.target.value)}
        />
      </div>

      <div className="item-field">
        <label>IVA (%)</label>
        <input
          type="number"
          value={item.iva}
          onChange={(e) => updateItem(index, "iva", e.target.value)}
        />
      </div>

      <div className="item-field">
        <label>Precio (€)</label>
        <input
          type="number"
          value={item.precio}
          onChange={(e) => updateItem(index, "precio", e.target.value)}
        />
      </div>

      <div className="item-field">
        <label>Total</label>
        <input
          type="text"
          value={item.total_linea.toFixed(2) + " €"}
          readOnly
        />
      </div>

      <button className="delete-item-btn" onClick={() => removeItem(index)} type="button" >
        <img src={BinIcon} alt="Eliminar ítem" />
      </button>

    </div>
  )
}
