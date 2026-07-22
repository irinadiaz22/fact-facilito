import TarjetaIcon from "../../../../assets/icons/tarjeta.svg";
import TransferenciaIcon from "../../../../assets/icons/transferencia.svg";
import EfectivoIcon from "../../../../assets/icons/efectivo.svg";

import { PaymentCard } from "./PaymentCard";

export const PaymentMethods = () => {
  return (
    <div className="formas-pago-container">
      <h2>Formas de pago</h2>

      <div className="formas-pago-grid">
        <PaymentCard icon={TarjetaIcon} title="Tarjeta" />
        <PaymentCard icon={TransferenciaIcon} title="Transferencia" />
        <PaymentCard icon={EfectivoIcon} title="Efectivo" />
      </div>
    </div>
  );
};
