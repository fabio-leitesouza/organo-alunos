import './Equipe.css';

const Equipe = (props) => {

    const css = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}


    return (
        <section className='equipe' style={css}>
            <h3 style={cssBorder}>{props.nome}</h3>

        </section>
    )
}

export default Equipe;