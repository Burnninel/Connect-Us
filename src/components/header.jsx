import Image from "next/image";
import { IconSideBar } from "./icons";
import logo from "../../public/images/sysmiddle-logo.png"

export default function Header() {
    return (
        <div>
            <div className={`flex flex-row items-center fixed h-16 w-screen bg-sky-600 shadow-md shadow-gray-400`}>
                <div className={`pl-10 flex items-center text-gray-50 font-medium text-lg`}>
                    <button>{IconSideBar} </button>
                    <span className="pl-2">Menu</span>
                </div>  
                <div className="flex justify-center w-full">
                    <div className={`w-48 mt-1 mr-32`}>
                        <Image src={logo} alt="Logo sysmiddle" />
                    </div>  
                </div>
                {/* <h2 className={`text-white pl-3`}>Connect Us</h2>        */}
            </div>
        </div>
    )
}