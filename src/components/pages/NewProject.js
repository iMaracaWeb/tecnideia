import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    // INICIALIZANDO O SERVIÇO
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/projects', { message: 'Projecto criado com sucesso!' })
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projecto</h1>
      <p>Crie seu projecto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projecto" />
    </div>
  )
}

export default NewProject
