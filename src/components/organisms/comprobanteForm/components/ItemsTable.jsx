import { ItemRow } from "./ItemRow"
import { ItemDescriptionRow } from "./ItemDescriptionRow"

export const ItemsTable = ({ items, addItem, updateItem, removeItem }) => {
  return (
    <div className="items-section">
      <h2>Conceptos e Ítems</h2>

      <button className="add-item-btn" onClick={addItem}>
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
          />

        </div>
      ))}
    </div>
  )
}
