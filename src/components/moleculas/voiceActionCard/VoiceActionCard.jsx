import './VoiceActionCard.css';
import MicroIcon from "../../../assets/icons/microphene.svg";

export const VoiceActionCard = ({ title, description, color }) => {
  return (
    <div className="voice-card" style={{ backgroundColor: color }}>
      <div className="voice-card-header">
        <img src={MicroIcon} alt="mic" className="voice-card-icon" />
        <h3 className="voice-card-title">{title}</h3>
      </div>

      <p className="voice-card-desc">{description}</p>
    </div>
  )
}
