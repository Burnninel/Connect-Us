interface BotoesProps {
    nome: string,
    cor?: 'azul' | 'cinza' | 'branco',
    largura?: string
}

export default function Botoes(props: BotoesProps) {
    return <input type="button" 
                  className={`
                    ml-2 mr-4 p-1
                    text-sm font-semibold
                    hover:text-sky-700 focus:text-sky-700 focus:bg-gray-100 focus:rounded transition hover:scale-105
                  `} 
                  value={props.nome}/>
}