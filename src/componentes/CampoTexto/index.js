import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const labelModificada = `...${props.label}`

    return (        
        <div className="campo-texto">
            <label>{labelModificada}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;