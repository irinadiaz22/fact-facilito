export const Totales = ({ items }) => {
  // Calcular totales visuales
  const subtotal = items.reduce((acc, item) => {
    const cantidad = Number(item.cantidad) || 0;
    const precio = Number(item.precio_unitario) || 0;
    return acc + cantidad * precio;
  }, 0);

  const totalIVA = items.reduce((acc, item) => {
    const cantidad = Number(item.cantidad) || 0;
    const precio = Number(item.precio_unitario) || 0;
    const iva = Number(item.iva) || 0;
    return acc + (cantidad * precio * (iva / 100));
  }, 0);

  const total = subtotal + totalIVA;

  return (
    <div className="totales-section">
      <h2>Totales</h2>

      <p>Subtotal: <strong>{subtotal.toFixed(2)} €</strong></p>
      <p>IVA: <strong>{totalIVA.toFixed(2)} €</strong></p>

      <p className="total-final">
        Total: {total.toFixed(2)} €
      </p>
    </div>
  );
};
