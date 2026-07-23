import MicroIcon from "../../../../assets/icons/microphene.svg";

export const ItemDescriptionRow = ({ item, index, updateItem, pagado }) => {
  return (
    <div className="item-description-row">
      
      <textarea
        placeholder="Descripción del ítem..."
        value={item.descripcion}
        onChange={(e) => updateItem(index, "descripcion", e.target.value)}
        disabled={pagado}
        style={{ opacity: pagado ? 0.5 : 1 }}
      />

      {!pagado && 
      <img src={MicroIcon} className="micro-icon" />}
      
    </div>
  )
}
