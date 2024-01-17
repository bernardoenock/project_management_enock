import { ProjectObj } from "../../api/interfaces"
import { deleteProject } from "../../api/projects";

import dayjs from "dayjs";
import Title from "../atoms/contents/Title";
import Description from "../atoms/contents/Description";
import StartDate from "../atoms/contents/StartDate";
import ListTasks from "../atoms/contents/ListTasks";
import BtnOpenProject from "../atoms/buttons/BtnOpenProject";
import BtnDelete from "../atoms/buttons/BtnDelete";
import WrapperProject from "../atoms/wrappers/WrapperProject";

type Props = {
  project: ProjectObj;
  onDelete: (projectId: string) => void;
};


const CardProject = ({project, onDelete}: Props) => {

  const handleDeleteProject = async () => {
    try {
      await deleteProject(project.id);
      console.log('Projeto excluído com sucesso!');
      onDelete(project.id);

    } catch (error) {
      console.error('Erro ao excluir projeto:', error);
    }
  };

  return (
    <WrapperProject>
      <Title>{project.name}</Title>
      <Description>{project.description}</Description>
      <StartDate>{dayjs(project.startdate).format('DD/MM/YYYY')}</StartDate>
      {project.tasks && 
      <ListTasks tasks={project.tasks} />
      }
      <BtnOpenProject projectId={project.id} />
      <BtnDelete handleDelete={handleDeleteProject} />
    </WrapperProject>
  )
}


export default CardProject