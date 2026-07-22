export const PaymentCard = ({ icon, title }) => {
  return (
    <div className="payment-card">
      <img src={icon} alt={title} className="payment-icon" />
      <span>{title}</span>
    </div>
  );
};
