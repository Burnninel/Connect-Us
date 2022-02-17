import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Botoes from "./Botoes";
import Buttons from "./Buttons";
import { IconConnetor, IconPen, IconPlus, IconTrash } from "./icons";
import Input from "./Input";
import Subtitulo from "./Subtitulo";

export default function Tabela() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`flex flex-row items-center`}>
                <Subtitulo subtitulo="Mapeadores" />
                <div className={`flex flex-row-reverse w-full`}>
                    <button className={`w-36 h-10 bg-gray-50 shadow rounded mr-2 text-xs transition delay-90 hover:scale-110 duration-100 font-bold text-sky-600`} onClick={handleShow}>
                        Adicionar Mapeador
                    </button>
                    <Modal centered enforceFocus={true} show={show} onHide={handleClose}>
                        <Modal.Header closeButton className="text-sm font-medium p-2"><span className="text-lg">Edição de Mapeador</span></Modal.Header>
                        <Modal.Body className={`border-none`}>
                            <div>
                                <Input label="Projeto" valor={'sysmiddle'} tipo="text" desabilitado={true} />
                                <Input label="Projeto" tipo="text" />
                            </div>
                        </Modal.Body>
                        <div className={`flex flex-row-reverse m-3 border-none`}>
                            <Buttons nome="Salvar" cor="bg-blue-500 text-gray-100" click={handleClose} />
                            <Buttons nome="Cancelar" cor="bg-gray-300 text-black mr-5" click={handleClose} />
                        </div>
                    </Modal>
                </div>
            </div>

            <table className="w-full rounded overflow-hidden mt-8 shadow-sm shadow-gray-50">
                <thead className={`text-gray-600 bg-gray-100`}>
                    <tr className="w-full">
                        <th className="text-left p-4">Nome do Mapeador</th>
                        <th className="p-4">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={`border-b`}>
                        <td className="text-left p-4">Projeto01</td>
                        <td className="flex items-center">
                            <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:text-blue-600`}>
                                {IconTrash}
                            </button>
                            <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-100 hover:text-blue-600`}>
                                {IconPen}
                            </button>
                        </td>
                    </tr>
                    <tr className={`border-b`}>
                        <td className="text-left p-4">Projeto02</td>
                        <td className="flex items-center">
                            <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:text-blue-600`}>
                                {IconTrash}
                            </button>
                            <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-100 hover:text-blue-600`}>
                                {IconPen}
                            </button>
                        </td>
                    </tr>
                    <tr className={``}>
                        <td className="text-left p-4">Projeto03</td>
                        <td className="flex items-center">
                            <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-purple-50 hover:text-blue-600`}>
                                {IconTrash}
                            </button>
                            <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-100 hover:text-blue-600`}>
                                {IconPen}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <div className={`flex w-full justify-center items-center rounded-full mt-3`}>
                <button className={`rounded-full mt-2 hover:p-1 bg-gray-100 text-sky-600 border-1 border-sky-600 hover:bg-gray-200`} onClick={handleShow}>
                    {IconPlus}
                </button>
                <Modal centered enforceFocus={true} show={show} onHide={handleClose}>
                    <Modal.Header closeButton className="text-sm font-medium p-2"><span className="text-lg">Edição de Mapeador</span></Modal.Header>
                    <Modal.Body className={`border-none`}>
                        <div>
                            <Input label="Projeto" valor={'sysmiddle'} tipo="text" desabilitado={true} />
                            <Input label="Projeto" tipo="text" />
                        </div>
                    </Modal.Body>
                    <div className={`flex flex-row-reverse m-3 border-none`}>
                        <Buttons nome="Salvar" cor="bg-blue-500 text-gray-100" click={handleClose} />
                        <Buttons nome="Cancelar" cor="bg-gray-300 text-black mr-5" click={handleClose} />
                    </div>
                </Modal>
            </div> */}
        </>
    )
}

// function Example() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//     );
// }

// import { Table } from "react-bootstrap";

// interface LayoutProps {
//     oneTh: string,
//     twoTh?: string,
//     threeTh?: string,
//     fourTh?: string
// }
// export default function Layout(props: LayoutProps) {
//     return (
//         <Table borderless className="font-light">
//             <thead className={`bg-gray-200 h-12 font-light`}>
//                 <tr>
//                     <th>{props.oneTh}</th>
//                     <th>{props.twoTh}</th>
//                     <th>{props.threeTh}</th>
//                     <th>{props.fourTh}</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>Mark</td>
//                     <td>Otto</td>
//                     <td>@mdo</td>
//                 </tr>
//             </tbody>
//         </Table>
//     )
// }