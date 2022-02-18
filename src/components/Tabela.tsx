import Link from "next/link";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Botoes from "./Botoes";
import Buttons from "./Buttons";
import { IconConnetor, IconPen, IconPlus, IconTrash, IconFilter } from "./icons";
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
                    <button className={`w-36 h-10 shadow-sm rounded mr-2 text-xs font-semibold text-sky-500 transition delay-50 hover:-translate-y-1`} onClick={handleShow}>
                        Adicionar Mapeador
                    </button>
                    <Modal centered enforceFocus={true} show={show} onHide={handleClose}>
                        <Modal.Header closeButton className="text-sm font-medium p-2 mr-2"><span className="text-lg">Edição de Mapeador</span></Modal.Header>
                        <Modal.Body className={`border-none`}>
                            <Buttons nome="Diretório de Captura" cor="w-full bg-gray-50 text-sky-500 border-1 border-sky-500 mb-2 hover:bg-sky-400 hover:text-gray-50" click={handleClose} />
                            <div className="flex flex-row item-center w-full h-8 ml-4 mb-1 text-gray-600">
                                <div className="w-full mr-2">
                                    <input type="checkbox" className={`mr-2 accent-sky-400 checked:bg-gray-50`} />
                                    <label className="text-sm font-normal ">Configurado</label>
                                </div>
                                <div className="w-full">
                                    <input type="checkbox" className="mr-2 accent-sky-400 checked:bg-gray-50" />
                                    <label className="text-sm checked:text-white">Reempilhar Processamento</label>
                                </div>
                            </div>
                            {/* <div className={`bg-gray-100 mb-3`}>
                                <label className="block">
                                    <input type="file" directory="" webkitdirectory="" id="pasta" className={`
                                                block w-full text-sm text-slate-500
                                                file:mr-4 file:py-3 file:px-4 
                                                file:hiddem file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-violet-50 file:text-blue-600
                                                hover:file:bg-blue-100`} />
                                </label>
                            </div> */}
                            <div className={`border-1 h-40 hover:border-sky-300`}>
                                <div className="w-full bg-gray-100">
                                    <span className={`text-xs  font-medium p-3 h-10`}>Mapeadores</span>
                                </div>
                                <ul className="h-full p-1 text-xs uppercase ">
                                    <li className="p-1 h-6 mb w-full hover:bg-gray-50 hover:text-sky-500">Map01</li>
                                    <li className="p-1 h-6 w-full hover:bg-gray-50 hover:text-sky-500">Map02</li>
                                    <li className="p-1 h-6 w-full hover:bg-gray-50 hover:text-sky-500">Map03</li>
                                    <li className="p-1 h-6 w-full hover:bg-gray-50 hover:text-sky-500">Map04</li>
                                    <li className="p-1 h-6  w-full hover:bg-gray-50 hover:text-sky-500">Map05</li>
                                </ul>
                            </div>
                        </Modal.Body>
                        <div className={`flex flex-row-reverse mr-4 border-bottom pb-3`}>
                            <Buttons nome="Remover" cor="bg-gray-200 text-black" click={handleClose} />
                            <Buttons nome="Abrir" cor="bg-sky-500 text-gray-100 mr-2" click={handleClose} />
                            <Buttons nome="Novo" cor="bg-sky-500 text-gray-100 mr-3" click={handleClose} />
                        </div>
                        <div className={`flex flex-row-reverse m-3 border-none`}>
                            <Buttons nome="Salvar" cor="bg-sky-500 text-gray-100" click={handleClose} />
                            <Buttons nome="Cancelar" cor="bg-gray-200 text-black mr-3" click={handleClose} />
                        </div>
                    </Modal>
                </div>
            </div>

            <table className="w-full rounded overflow-hidden mt-6 shadow-sm shadow-gray-50 transition delay-90 hover:scale-100 duration-100">
                <thead className={`text-gray-600 bg-gray-100`}>
                    <tr className="w-full">
                        <th className="text-left p-4">Nome do Mapeador</th>
                        <th className="p-4">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <Link href="http://localhost:3000">
                        <tr className={`border-b cursor-pointer hover:bg-gray-50`}>
                            <td className="text-left p-4">Projeto01</td>
                            <td className="flex items-center">
                                <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-50 hover:text-red-600`}>
                                    {IconTrash}
                                </button>
                                <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-50 hover:text-blue-600`}>
                                    {IconPen}
                                </button>
                            </td>
                        </tr>
                    </Link>
                    <Link href="http://localhost:3000">
                        <tr className={`border-b cursor-pointer hover:bg-gray-50`}>
                            <td className="text-left p-4">Projeto02</td>
                            <td className="flex items-center">
                                <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-50 hover:text-red-600`}>
                                    {IconTrash}
                                </button>
                                <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-50 hover:text-blue-600`}>
                                    {IconPen}
                                </button>
                            </td>
                        </tr>
                    </Link>
                    <Link href="http://localhost:3000">
                        <tr className={`cursor-pointer hover:bg-gray-50`}>
                            <td className="text-left p-4">Projeto03</td>
                            <td className="flex items-center">
                                <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-purple-50 hover:text-red-600`}>
                                    {IconTrash}
                                </button>
                                <button className={`flex justify-center items-center rounded-full mt-3 p-2 m-1 hover:bg-gray-50 hover:text-blue-600`}>
                                    {IconPen}
                                </button>
                            </td>
                        </tr>
                    </Link>
                </tbody>
            </table>
        </>
    )
}


{/* <Input label="Projeto" valor={'sysmiddle'} tipo="text" desabilitado={true} />
<Input label="Mapeador" tipo="text" /> */}
