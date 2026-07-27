export const PaymentCard = ({ icon, title, selected, onClick }) => {
  return (
    <div 
      className="payment-card"
      onClick={onClick}
      style={{
        borderColor: selected ? "#1A3CFF" : "#d1d5db",
        background: selected ? "#e8ecff" : "#f8f9ff",
        cursor: "pointer"
      }}
    >
      <img src={icon} alt={title} className="payment-icon" />
      <span>{title}</span>
    </div>
  );
};
