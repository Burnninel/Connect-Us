interface PropsButton {
    nome: string,
    cor: string,
    click: () => void
}

export default function Buttons(props: PropsButton) {
    return <button className={`${props.cor}  h-9 round rounded w-24`} onClick={props.click}>{props.nome}</button>
}