import { useState } from 'react';
import Banner from './componentes/Banner';
import Equipe from './componentes/Equipe';
import Formulario from './componentes/Formulario';

function App() {

  const equipes = [
    {
      nome: 'Programação',
      corPrimaria: '#24978d',
      corSecundaria: '#36bf53'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#e491d2',
      corSecundaria: '#e897d7'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#24978d',
      corSecundaria: '#36bf53'
    },
    {
      nome: 'Devops',
      corPrimaria: '#55484e',
      corSecundaria: '#545acs'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#24978d',
      corSecundaria: '#36bf53'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#55484e',
      corSecundaria: '#545acs'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#24978d',
      corSecundaria: '#36bf53'
    }
  ]

  const [alunos, setAlunos] = useState([])

  const aoNovoAlunoAdicionado = (aluno) => {
    console.log(aluno)
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
        alunos={alunos}
      />)}
    </div>
  );
}

export default App;
