import { useState, useRef } from "react";
import MicroIcon from "../../../../assets/icons/microphene.svg";

export const ItemDescriptionRow = ({ item, index, updateItem, pagado }) => {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  const startDictation = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Tu navegador no soporta dictado por voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const texto = event.results[0][0].transcript;

      // Actualizar el campo descripción usando tu updateItem
      updateItem(index, "descripcion", (item.descripcion || "") + " " + texto);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopDictation = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="item-description-row">
      
      <textarea
        placeholder="Descripción del ítem..."
        value={item.descripcion || ""}
        onChange={(e) => updateItem(index, "descripcion", e.target.value)}
        disabled={pagado}
        style={{ opacity: pagado ? 0.5 : 1 }}
      />

      {!pagado && (
        <img
          src={MicroIcon}
          className={`micro-icon ${isRecording ? "recording" : ""}`}
          onClick={isRecording ? stopDictation : startDictation}
        />
      )}
      
    </div>
  );
};
