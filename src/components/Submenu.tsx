import Link from "next/link";

interface SubmenuProps {
    titulo: string,
    icon: {},
    className?: {},
    url: string
}

export default function Submenu(props: SubmenuProps) {
    return (
        <li className={`h-10 cursor-pointer hover:bg-gray-100 hover:text-sky-600  ${props.className}`}>
            <Link href={props.url}>
                <div className={`flex items-center ml-6 h-10`}>
                    {props.icon}
                    <span className={`ml-4 font-normal text-sm text-gray-900 hover:text-sky-600`}>{props.titulo}</span>
                </div>
            </Link>
        </li>
    )
}