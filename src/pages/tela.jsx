import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Inputs from "../components/Input";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <div className={`flex h-screen`}>
            <Layout titulo="Editor de conector de Banco de Dados - Entrada">
                <Inputs />            
            </Layout>
        </div>
    )
}