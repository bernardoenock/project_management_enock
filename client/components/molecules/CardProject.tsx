import { Box, Typography, Button } from "@mui/material"
import { ProjectObj } from "../../api/interfaces"
import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';
import { deleteProject } from "../../api/projects";
import LinkApp from "../atoms/LinkApp";
import dayjs from "dayjs";

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
    <Box
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      width: '20rem',
      m: 2,
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >
      <Typography variant="h6" textAlign={"center"} sx={{backgroundColor: "#dfff00"}}>{project.name}</Typography>
      <Typography variant="body1">Descrição: {project.description}</Typography>
      <Typography variant="body1">Data Inicial: {dayjs(project.startdate).format('DD/MM/YYYY')}</Typography>

      {project.tasks && 
      <>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      </>
      }

      <Button
        variant="contained"
        color="success"
        startIcon={<LaunchIcon />}
      >
      <LinkApp href="/dashboard/[id]" as={`/dashboard/${project.id}`} color="white">
        Abrir
      </LinkApp>
      </Button>

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteProject}
      >
        Excluir Projeto
      </Button>

    
    </Box>
  )
}


export default CardProject