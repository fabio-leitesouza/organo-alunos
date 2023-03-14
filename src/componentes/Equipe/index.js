import Aluno from '../Aluno';
import './Equipe.css';

const Equipe = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    const cssBorder = { borderColor: props.corPrimaria }

    return (
        (props.alunos.length > 0) ? <section className='equipe' style={css}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='alunos'>
                {props.alunos.map(aluno => {
                    console.log('aluno')
                    return <Aluno
                        key={aluno.nome}
                        corDeFundo={props.corPrimaria}
                        nome={aluno.nome}
                        especialidade={aluno.especialidade}
                        imagem={aluno.imagem}
                        portifolio={aluno.portifolio}   
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section>
            : ''
    )
}

export default Equipe;