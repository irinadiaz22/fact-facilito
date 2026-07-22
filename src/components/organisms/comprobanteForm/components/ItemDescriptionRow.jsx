import MicroIcon from "../../../../assets/icons/microphene.svg";

export const ItemDescriptionRow = ({ item, index, updateItem }) => {
  return (
    <div className="item-description-row">
      
      <textarea
        placeholder="Descripción del ítem..."
        value={item.descripcion}
        onChange={(e) => updateItem(index, "descripcion", e.target.value)}
      />

      <img src={MicroIcon} className="micro-icon" />
    </div>
  )
}
