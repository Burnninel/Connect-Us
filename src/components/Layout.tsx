import Sidebar from "./Sidebar";
import Titulo from "./titulo"
import Botoes from "./Botoes";
import Tabela from "./Tabela";

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div className={`w-screen mt-8 p-16`}>
                <Titulo titulo="Editor de conector de Banco de Dados - Entrada"/>
                <div className="mt-4">
                    <div>
                        <Botoes nome="Conector"/>
                        <Botoes nome="Processo de Saída" />
                    </div>
                    <hr className="mt-1"/>
                </div>
                <Tabela/>
            </div>
        </>
    )
}