import { useState } from 'react';
import Banner from './componentes/Banner';
import Equipe from './componentes/Equipe';
import Formulario from './componentes/Formulario';

function App() {

    const equipes = [
    {
      nome: 'Programação',
      corPrimaria: '#7DF5DA',
      corSecundaria: '#E491D2'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#FABD93',
      corSecundaria: '#939AFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#E491D2',
      corSecundaria: '#F0E68D'
    },
    {
      nome: 'Devops',
      corPrimaria: '#939AFA',
      corSecundaria: '#FABD93'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#7DF5DA',
      corSecundaria: '#E491D2'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#F0E68D',
      corSecundaria: '#939AFA'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#E491D2',
      corSecundaria: '#7DF5DA'
    }
  ]

  const [alunos, setAlunos] = useState([])

  const aoNovoAlunoAdicionado = (aluno) => {
    debugger
    setAlunos([...alunos, aluno])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeEquipes={equipes.map(equipe => equipe.nome)}
        aoAlunoCadastrado={aluno => aoNovoAlunoAdicionado(aluno)} />
      {equipes.map(equipe => <Equipe
        key={equipe.nome}
        nome={equipe.nome}
        corPrimaria={equipe.corPrimaria}
        corSecundaria={equipe.corSecundaria}
        alunos={alunos.filter(aluno => aluno.especialidade === equipe.nome )}
      />)}
    </div>
  );
}

export default App;
