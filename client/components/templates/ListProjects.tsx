import * as React from 'react'
import CardProject from '../molecules/CardProject'
import { getProjects } from '../../api/projects';

const ListProjects = () => {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getProjects()

        setProjects(response)
      } catch (error) {
        console.error("Erro ao buscar Projetos:", error)
      }
    }

    fetch()
  }, [])



  const handleDeleteProject = (projectId: string) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId));
  };

  return (
    <ul style={{ margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {projects.map((project) => (
        <li key={project.id} style={{listStyle: 'none', margin: 0, padding: 0}}>
          <CardProject project={project} onDelete={handleDeleteProject} />
        </li>
      ))}
    </ul>
  );
};

export default ListProjects;
