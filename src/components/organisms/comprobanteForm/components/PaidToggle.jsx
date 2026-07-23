export const PaidToggle = ({ value, onChange}) => {
  return (
    <div className="paid-toggle">
      <label className="toggle-label">¿Factura pagada?</label>

      <div
        className={`toggle-switch ${value ? "on" : "off"}`}
        onClick={() => onChange(!value)}
      >
        <div className="toggle-knob"></div>
      </div>

      <span className="toggle-status">
        {value ? "Pagada" : "No pagada"}
      </span>
    </div>
  );
};
