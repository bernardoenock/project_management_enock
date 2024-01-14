import * as React from 'react'
import CardProject from './molecules/CardProject'

type Props = {
  items: any[];
};

const List = ({ items }: Props) => {
  const [projects, setProjects] = React.useState(items);

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

export default List;
