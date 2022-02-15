import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className={`flex h-screen`}>
      <Header />
      <Sidebar />
      <Logo />
    </div>
  )
}
