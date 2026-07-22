import { Link } from "react-router-dom"
import "./sidebarLink.css"

export const SidebarLink = ({ icon, label, to, onClick }) => (
  <Link to={to} className="sidebar-link" onClick={onClick}>
    <img src={icon} className = "icon" />
    <span>{label}</span>
  </Link>
)
