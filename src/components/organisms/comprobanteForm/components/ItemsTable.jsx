import { ItemRow } from "./ItemRow"
import { ItemDescriptionRow } from "./ItemDescriptionRow"

export const ItemsTable = ({ items, addItem, updateItem, removeItem, pagado }) => {
  return (
    <div className="items-section">
      <h2>Conceptos e Ítems</h2>

      <button className="add-item-btn"
         onClick={addItem}
         disabled={pagado}
          style={{ opacity: pagado ? 0.5 : 1 }}
          >
        + Añadir ítem
      </button>

      {items.map((item, index) => (
        <div key={index} className="item-card">

          <ItemRow
            item={item}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />

          <ItemDescriptionRow
            item={item}
            index={index}
            updateItem={updateItem}
            pagado={pagado}
          />

        </div>
      ))}
    </div>
  )
}
