import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Inputs from "../components/Input";
import Titulo from "../components/titulo";

export default function Home() {
    return (
        <div className={`flex h-screen w-screen bg-black`}>
            <div>
                <Header />
                <Sidebar />
            </div>
            <div className="pt-24 ml-14">
                <div>
                    <Titulo titulo="Editar conector de Banco de Dados - Saída" />
                </div>
                <div className="bg-white"></div>
            </div>
        </div>
    )
}