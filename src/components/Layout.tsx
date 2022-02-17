import Header from "./Header";
import Sidebar from "./Sidebar";
import Titulo from "./Titulo"
import Subtitulo from "./Subtitulo"
import Botoes from "./Botoes";
import Tabela from "./Tabela";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className={`w-screen mt-10 p-20`}>
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