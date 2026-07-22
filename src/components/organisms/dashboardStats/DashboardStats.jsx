import { StatCard } from "../../atoms/statCard/StatCard"
import "./dashboardStats.css"

export const DashboardStats = () => {
  return (
    <div className="dashboard-stats">

      <StatCard
        title="TOTAL FACTURADO"
        value="€42,850"
      />

      <StatCard
        title="PENDIENTE DE COBRO"
        value="€8,120"
      />

      <StatCard
        title="PRESUPUESTOS ACEPTADOS"
        value="85%"        
      />

    </div>
  )
}
