import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Comprobantes } from './pages/comprobantes/Comprobantes'
import { Clientes } from './pages/clientes/Clientes'
import { Productos } from './pages/productos/Productos'
import { MainLayout } from './mainLayout/MainLayout'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/Comprobantes" element={<MainLayout><Comprobantes tipo="factura" /></MainLayout>} />
                <Route path="/Presupuestos" element={<MainLayout><Comprobantes tipo="presupuesto" /></MainLayout>} />
                <Route path="/Clientes" element={<MainLayout><Clientes /></MainLayout>} />
                <Route path="/Productos" element={<MainLayout><Productos /></MainLayout>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;