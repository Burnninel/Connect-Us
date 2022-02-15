import { IconProject } from "./icons";

export default function Sidebar() {
    const projetos = ['sysmiddle']
    const letraProjetos = projetos.map(index => index[0]);
    const icon = <div className={`flex justify-center h-8 w-8 rounded-lg font-semibold text-xl bg-gray-300`}>{letraProjetos}</div>

    return (
        <div className={`h-screen w-64 pt-16 text-white bg-gray-50 border-2`}>
            <ul className={`hover:bg-gray-100`}>
                <li className={`flex justify-start items-center p-2 mr-3`} onClick={() => console.log('clicou')}>
                    <div className={`flex`}>
                        {icon}
                        <span className={`flex items-center font-medium ml-3 text-black`}>{projetos[0]}</span>
                    </div>
                    <div className="ml-12">
                        {IconProject}
                    </div>
                </li>
            </ul>
        </div>
    )
}

