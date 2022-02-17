// import Accordion from "react-bootstrap/esm/Accordion";
import { useState } from "react";
import { IconConnetor, IconData, IconDice, IconDown, IconFlag, IconFolder, IconImp, IconMap, IconProject, IconProjetos, IconUp } from "./icons";
import Submenu from "./Submenu";

interface MenusProps {
    nome: string
}

export default function Dropdowns(props: MenusProps) {
    return (
        <>
            <ul className={`w-full border-bottom mb-2 cursor-pointer`} onClick={() => console.log('Clicou')}>
                <li className={`flex items-center h-7 pt-2 pl-1 pr-2`}>
                    <div className={`flex `}>
                        {IconFolder}
                        <span className={`flex items-center font-medium ml-4 text-black`}>Cadastros</span>
                    </div>
                    <div className="ml-14">
                        {IconProject}
                    </div>
                </li>
                <Submenu className={`mt-2`} titulo="Projetos" icon={IconProjetos} url="http://localhost:3000/" />
                <Submenu titulo="Tipo de dados" icon={IconData} url="http://localhost:3000/"/>
                <Submenu titulo="Layouts/Mapeadores" icon={IconMap} url="http://localhost:3000/" />
                <Submenu className={`mb-2`} titulo="Conectores" icon={IconConnetor} url="/tela" />
            </ul>
            <ul className={`w-full border-bottom mb-2 cursor-pointer`} onClick={() => console.log('Clicou')}>
                <li className={`flex items-center h-7 pt-2 pl-1 pr-2`} onClick={() => console.log('')}>
                    <div className={`flex pr-0`}>
                        {IconImp}
                        <span className={`flex items-center font-medium ml-4 text-black`}>Importações</span>
                    </div>
                    <div className="ml-9">
                        {IconProject}
                    </div>
                </li>
                <Submenu className={`mt-2`} titulo="Layout" icon={IconMap} url="http://localhost:3000/"/>
                <Submenu className={`mb-2`} titulo="Conectores" icon={IconConnetor}  url="http://localhost:3000/"/>
            </ul>
            <ul className={`cursor-pointer `} onClick={() => console.log('Clicou')}>
                <li className={`flex items-center h-7 pt-2 pl-1 pr-2`} onClick={() => console.log('')}>
                    <div className={`flex pr-0`}>
                        {IconDice}
                        <span className={`flex items-center font-medium ml-4 text-black`}>Dados</span>
                    </div>
                    <div className="ml-20">
                        {IconProject}
                    </div>
                </li>
                <Submenu className={`mt-2`} titulo="Importação" icon={IconUp} url="http://localhost:3000/" />
                <Submenu titulo="Exportação" icon={IconDown}  url="http://localhost:3000/"/>
            </ul>
        </>

    )
}

// function colapse() {
//     return (
//         <Accordion flush defaultActiveKey="0">
//             <Accordion.Item eventKey="0">
//                 <Accordion.Header>Menus</Accordion.Header>
//                 <Accordion.Body>
//                     <div className="hover:bg-gray-50">
//                         <li>
//                             <div className={`flex ml-10 mt-2`}>
//                                 {IconFolder}
//                                 <span className={`ml-3  text-black`}>Projetos</span>
//                             </div>
//                         </li>
//                         <li>
//                             <div className={`flex ml-10 mt-2`}>
//                                 {IconFolder}
//                                 <span className={`ml-3  text-black`}>Mapeadores</span>
//                             </div>
//                         </li>
//                         <li>
//                             <div className={`flex ml-10 mt-2`}>
//                                 {IconFolder}
//                                 <span className={`ml-3  text-black`}>Layouts</span>
//                             </div>
//                         </li>
//                     </div>
//                 </Accordion.Body>
//             </Accordion.Item>
//         </Accordion>
//     )
// }

