import TarjetaIcon from "../../../../assets/icons/tarjeta.svg";
import TransferenciaIcon from "../../../../assets/icons/transferencia.svg";
import EfectivoIcon from "../../../../assets/icons/efectivo.svg";

import { PaymentCard } from "./PaymentCard";

export const PaymentMethods = ({ value, onChange }) => {
  const metodos = [
    { id: "tarjeta", label: "Tarjeta", icon:TarjetaIcon },
    { id: "efectivo", label: "Efectivo", icon: EfectivoIcon },
    { id: "transferencia", label: "Transferencia", icon: TransferenciaIcon }    
  ];

  return (
    <div className="formas-pago-container">
      <h2>Formas de pago</h2>

      <div className="formas-pago-grid">
        {metodos.map((m) => (
          <PaymentCard
            key={m.id}
            icon={m.icon}
            title={m.label}
            selected={value === m.id}
            onClick={() => onChange(m.id)}
            />
      ))}
      
      </div>
    </div>
  );
};
