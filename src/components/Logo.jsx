import Image from "next/image";
import sysmiddle from "../../public/images/sysmiddle.png"

export default function Logo() {
    return (
        <div className={`flex justify-center items-center mr-64 mb-24`}>
            <div className={`w-1/5 bg-fixed`}>
                <Image src={sysmiddle} alt="Logo sysmiddle"/>
            </div>
        </div>
    )
}