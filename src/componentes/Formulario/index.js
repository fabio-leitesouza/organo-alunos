import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    ' Inovação e Gestão'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Salvando...')
}

const Formulario = () => {
    return (
        <section className='formulario'>

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro:</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Portfolio" placeholder="Insira o link do portfolio" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa itens={times} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario