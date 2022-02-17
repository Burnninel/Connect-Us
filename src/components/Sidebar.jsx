// import { IconProject } from "./icons";
import Menu from "./Menus";
import { IconFolder, IconMyProject, IconProject } from "./icons";

export default function Sidebar() {
    const projetos = ['sysmiddle']
    // const letraProjetos = projetos.map(index => index[0]);
    // const icon = <div className={`flex justify-center h-8 w-8 rounded-lg font-semibold text-xl bg-gray-300`}>{letraProjetos}</div>

    return (
        <div className={` h-full w-64 pt-16 text-white bg-gray-50 border-2`}>
            <ul className={`cursor-pointer hover:bg-gray-100 border-bottom mb-2`}>
                <li className={`flex justify-start items-center p-2 mb-2 mr-5`}>
                    <div className={`flex`}>
                        {IconMyProject}
                        <span className={`flex items-center font-medium ml-4 text-black`}>{projetos[0]}</span>
                    </div>
                    <div className="ml-12">
                        {IconProject}
                    </div>
                </li>
            </ul>
            <Menu />
        </div>
    )
}

