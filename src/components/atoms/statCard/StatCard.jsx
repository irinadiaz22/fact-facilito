import "./StatCard.css"

export const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value">{value}</p>
    </div>
  )
}
