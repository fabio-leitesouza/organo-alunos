import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';



const Formulario = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     ' Inovação e Gestão'
    // ]



    const [nome, setNome] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [imagem, setImagem] = useState('')
    const [especialidade, setEspecialidade] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAlunoCadastrado({
            nome,
            portfolio,
            imagem,
            especialidade
        })
        console.log('Salvando...', nome, portfolio, imagem, especialidade)
    }
    return (
        <section className='formulario'>

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membro:</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    label="Portfolio"
                    placeholder="Insira o link do portfolio"
                    valor={portfolio}
                    aoAlterado={(valor) => setPortfolio(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    label="Especialidade"
                    itens={props.nomeEquipes}                    
                    valor={especialidade}
                    aoAlterado={(valor) => setEspecialidade(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario