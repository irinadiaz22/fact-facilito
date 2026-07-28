import { ClienteForm } from "../../components/organisms/clienteForm/ClienteForm.jsx"
import { TablaClientes } from "../../components/organisms/clientesTabla/TablaClientes.jsx"

export const Clientes = () => {
    return (
        <div>
            <ClienteForm />            

            <TablaClientes />
        </div>
    )
}
