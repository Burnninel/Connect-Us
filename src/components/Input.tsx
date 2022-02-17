interface InputProps{
    label: string;
    valor?: any;
    placeholder?: string,
    desabilitado?: boolean,
    obrigatorio?: boolean;
    tipo: "text" | "number" | "file" 
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col`}>
            <label className={`mb-1 text-sm font-medium`}>{props.label}</label>
            <input className={` border-1 focus:border-blue-200 mb-3 h-10 w-full p-2 text-sm font-normal`} 
                   type={props.tipo} 
                   value={props.valor} 
                   disabled={props.desabilitado} 
                   placeholder={props.placeholder} 
                   required={props.obrigatorio}
                />
        </div>
    )
}