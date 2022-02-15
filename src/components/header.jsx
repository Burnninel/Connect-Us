import Image from "next/image";
import { IconSideBar } from "./icons";
import logo from "../../public/images/logo.png"

export default function Header() {
    return (
        <div>
            <div className={`flex flex-row items-center fixed h-14 w-screen mb-28 bg-sky-600 shadow-md shadow-gray-400`}>
                <div className={`pr-8`}>
                    <button>{IconSideBar}</button>
                </div>  
                <div className={`w-10 mt-1`}>
                    <Image src={logo} alt="Logo sysmiddle" />
                </div>  
                <h2 className={`text-white pl-3`}>Connect Us</h2>       
            </div>
            
        </div>
    )
}