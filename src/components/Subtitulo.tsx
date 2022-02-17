interface SubtituloProps {
    subtitulo: string
}

export default function Subtitulo(props: SubtituloProps) {
    return <h2 className={`font-normal text-xl text-gray-700 ml-1 mt-3`}>{props.subtitulo}</h2>
}