interface TituloProps {
    titulo: string,
}

export default function Titulo(props: TituloProps) {
    return <h1 className={`font-normal text-2xl text-gray-700 mb-5`}>{props.titulo}</h1>
}