// import Accordion from "react-bootstrap/esm/Accordion";
import { useState } from "react";
import { IconConnetor, IconData, IconDice, IconDown, IconFlag, IconFolder, IconImp, IconMap, IconProject, IconProjetos, IconUp } from "./icons";
import Submenu from "./Submenu";
import useCollapse from 'react-collapsed'

interface MenusProps {
    nome: string
}

export default function Dropdowns(props: MenusProps) {
    const [defaultExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ defaultExpanded: true })

    return (
        <>
            <ul className={`w-full border-bottom mb cursor-pointer`}>
                <li className={`flex items-center h-10 mb-2 pl-1 pr-2`} {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}>
                    <div className={`flex `}>
                        {IconFolder}
                        <span className={`flex items-center font-medium ml-4 text-black`}>Cadastros</span>
                    </div>
                    <div className="ml-14">
                        {IconProject}
                    </div>
                </li>
                <div {...getCollapseProps()}>
                    <Submenu titulo="Projetos" icon={IconProjetos} url="http://localhost:3000/" />
                    <Submenu titulo="Tipo de dados" icon={IconData} url="http://localhost:3000/" />
                    <Submenu titulo="Layouts/Mapeadores" icon={IconMap} url="http://localhost:3000/" />
                    <Submenu className={`mb-2`} titulo="Conectores" icon={IconConnetor} url="/tela" />
                </div>
            </ul>
            {oneColapsed()}
            {twoColapsed()}
        </>

    )
}

function oneColapsed() {
    const [defaultExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ defaultExpanded: true })

    return (
        <ul className={`w-full border-bottom mb-2 cursor-pointer`}>
            <li className={`flex items-center h-10 pb-3 pl-1 pr-2`
            } {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })
                }>
                <div className={`flex pr-0`}>
                    {IconImp}
                    <span className={`flex items-center font-medium ml-4 text-black`}>Importações</span>
                </div>
                <div className="ml-9">
                    {IconProject}
                </div>
            </li>
            <div {...getCollapseProps()}>
                <Submenu titulo="Layout" icon={IconMap} url="http://localhost:3000/" />
                <Submenu className={`mb-2`} titulo="Conectores" icon={IconConnetor} url="http://localhost:3000/" />
            </div>
        </ul>
    )
}

function twoColapsed() {
    const [defaultExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ defaultExpanded: true })

    return (
        <ul className={`cursor-pointer`} onClick={() => console.log('Clicou')}>
            <li className={`flex items-center h-7 pt-2 pl-1 pr-2`} {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
                <div className={`flex pr-0`}>
                    {IconDice}
                    <span className={`flex items-center font-medium ml-4 text-black`}>Dados</span>
                </div>
                <div className="ml-20">
                    {IconProject}
                </div>
            </li>
            <div {...getCollapseProps()}>
                <Submenu className={`mt-2`} titulo="Importação" icon={IconUp} url="http://localhost:3000/" />
                <Submenu titulo="Exportação" icon={IconDown} url="http://localhost:3000/" />
            </div>
        </ul>
    )
}