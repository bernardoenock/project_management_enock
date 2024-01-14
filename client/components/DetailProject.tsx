import * as React from 'react'
import { Box, Typography } from '@mui/material'
import CardTask from './molecules/CardTask'
import CreateTask from './organisms/CreateTask'
import UpdateProject from './organisms/UpdateProject'
import { getOneProject } from '../api/projects'
import { useRouter } from 'next/router'

const DetailProject = () => {
  const router = useRouter();
  const { id } = router.query;

  const [tasks, setTasks] = React.useState([]);
  const [project, setProject] = React.useState<any>();

  const handleDeleteTask = (taskId: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getOneProject(id as string)

        setProject(response)
        setTasks(response.tasks)
      } catch (error) {
        console.error("Erro ao buscar Projetos:", error)
      }
    }

    fetch()
  }, [])
  

return (
    <Box>
      <Typography variant='h5'>{project?.name}</Typography>
      <Typography variant='h6'>{project?.description}</Typography>
      <UpdateProject productId={project?.id}/>
      <CreateTask productId={project?.id}/>
      {tasks && tasks.map((task) => (
          <li key={task.id} style={{listStyle: 'none', margin: 0, padding: 0}}>
            <CardTask task={task} projectId={project?.id} onDelete={handleDeleteTask}/>
          </li>
        ))}
    </Box>
  )
}

export default DetailProject
