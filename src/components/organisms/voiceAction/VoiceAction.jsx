import { VoiceActionCard } from "../../moleculas/voiceActionCard/VoiceActionCard";

import "./voiceAction.css";

export const VoiceAction = () => {
  return (
    <div className="voice-actions">

      <VoiceActionCard
        title="Crear factura por voz"
        description="Ej: 'Factura a Juan Pérez por 200€'"
        color="#1A3CFF"   // azul
      />

      <VoiceActionCard
        title="Crear presupuesto por voz"
        description="Ej: 'Nuevo presupuesto para Proyecto X'"
        color="#10B981"   // verde
      />

      <VoiceActionCard
        title="Crear nuevo cliente"
        description="Añade un nuevo cliente a tu base"
        color="#2563EB"   // azul más oscuro
      />

    </div>
  )
}
