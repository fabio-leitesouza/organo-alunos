import './Aluno.css'

const Aluno = ({ nome, imagem, especialidade, corDeFundo }) => {
    return (
        <div className='aluno'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt='Fabio Souza' />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{especialidade}</h5>
            </div>
        </div>
    )
}

export default Aluno;
