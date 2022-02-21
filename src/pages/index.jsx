import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <Logo />
            <Footer />
        </div>
    )
}
