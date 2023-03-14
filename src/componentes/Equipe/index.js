import Aluno from '../Aluno';
import './Equipe.css';

const Equipe = ({alunos, nome, corPrimaria, corSecundaria, aoDeletar }) => {

    const css = { backgroundColor: corSecundaria }
    const cssBorder = { borderColor: corPrimaria }

    return (
        (alunos.length > 0) ? <section className='equipe' style={css}>
            <h3 style={cssBorder}>{nome}</h3>
            <div className='alunos'>
                {alunos.map(aluno => {
                    // console.log(<Aluno
                    //     key={aluno.nome}
                    //     corDeFundo={corPrimaria}
                    //     nome={aluno.nome}
                    //     especialidade={aluno.especialidade}
                    //     imagem={aluno.imagem}
                    //     portifolio={aluno.portifolio}   
                    //     aoDeletar={aoDeletar}
                    // />)
                    return <Aluno
                        key={aluno.nome}
                        corDeFundo={corPrimaria}
                        nome={aluno.nome}
                        especialidade={aluno.especialidade}
                        imagem={aluno.imagem}
                        portifolio={aluno.portifolio}   
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>
            : ''
    )
}

export default Equipe;