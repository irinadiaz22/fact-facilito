export const NotasTextarea = ({ value, onChange }) => {
  return (
    <div className="notes-section">
      <h2>Notas y condiciones</h2>
      <textarea
        placeholder="Añade notas adicionales para tu cliente..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
