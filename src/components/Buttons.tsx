import { Button } from "@mui/material";

interface PropsButton {
    nome: string,
    cor: string,
    click?: () => void
}

export default function Buttons(props: PropsButton) {
    // return <button className={`${props.cor}  h-9 round rounded w-24`} onClick={props.click}>{props.nome}</button>
    return <Button className={`${props.cor} w-24 h-9 rounded font-medium text-xs hover:none`} onClick={props.click}>{props.nome}</Button>
}

{/* <Button variant="text">Text</Button> */}