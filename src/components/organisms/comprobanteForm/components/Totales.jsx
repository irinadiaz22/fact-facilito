export const Totales = ({ items }) => {

  const subtotal = items.reduce((acc, item) => acc + item.precio, 0)
  const ivaTotal = items.reduce((acc, item) => acc + (item.precio * item.iva / 100), 0)
  const total = items.reduce((acc, item) => acc + item.total_linea, 0)

  return (
    <div className="totales-section">
      <h2>Resumen del Comprobante</h2>

      <p>Subtotal: €{subtotal.toFixed(2)}</p>
      <p>IVA total: €{ivaTotal.toFixed(2)}</p>

      <h3 className="total-final">
        TOTAL: €{total.toFixed(2)}
      </h3>
    </div>
  )
}
