import Logo from '../../../assets/img/logo.png'
import HomeIcon from '../../../assets/icons/home.svg'
import FacturaIcon from '../../../assets/icons/factura1.svg'
import PresupuestoIcon from '../../../assets/icons/presupuesto.svg'
import ClientesIcon from '../../../assets/icons/user.svg'
import ProductosIcon from '../../../assets/icons/factura2.svg'
import "./sidebar.css"
import { SidebarLink } from '../../moleculas/sidebarLink/SidebarLink'

export const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
       <div className="sidebar-header">
        <img src={Logo} alt="Facilito Logo" className="sidebar-logo" />
        <h2 className="sidebar-title">Fac-Facilito</h2>
      </div>
      <nav className="sidebar-nav">
        <SidebarLink to="/" icon={HomeIcon} label="Inicio" />
        <SidebarLink to="/Comprobantes" icon={FacturaIcon} label="Facturas" />
        <SidebarLink to="/Comprobantes" icon={PresupuestoIcon} label="Presupuestos" />
        <SidebarLink to="/Clientes" icon={ClientesIcon} label="Clientes" />
        <SidebarLink to="/Productos" icon={ProductosIcon} label="Productos" />
      </nav>
    </aside>

    );
};
