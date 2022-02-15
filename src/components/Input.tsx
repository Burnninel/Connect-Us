interface InputProps{
    label: string;
    valor: any;
    placeholder: string,
    obrigatorio?: boolean;
    tipo: "text" | "number" | "file" 
}

export default function Input(props: InputProps) {
    return (
        <div>
            <label className="mr-4">{props.label}</label>
            <input className={`bg-gray-100`} 
                   type={props.tipo} 
                   value={props.valor} 
                   placeholder={props.placeholder} 
                   required={props.obrigatorio}
                />
        </div>
    )
}