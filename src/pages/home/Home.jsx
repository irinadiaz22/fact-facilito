import './home.css';
import { DashboardStats } from "../../components/organisms/dashboardStats/DashboardStats";
import { VoiceAction } from "../../components/organisms/voiceAction/VoiceAction";

export const Home = () => {
    return (
        <div>
            <main className="main">
                <div className="content">
                    <h1>Bienvenido a Fact-Facilito</h1>
                    <p>Aquí tienes un resumen de tu facturación para hoy.</p>

                    <VoiceAction />

                    <DashboardStats />
                    

                </div>
            </main>
        </div>
    )
}
