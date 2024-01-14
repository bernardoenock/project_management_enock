import * as React from 'react'
import { Box, Typography } from '@mui/material'
import CardTask from './molecules/CardTask'
import CreateTask from './organisms/CreateTask'
import UpdateProject from './organisms/UpdateProject'

type ListDetailProps = {
  item: any
}

const ListDetail = ({ item }: ListDetailProps) => {
  const [tasks, setTasks] = React.useState(item.tasks);

  const handleDeleteTask = (taskId: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };
  

return (
    <Box>
      <Typography variant='h5'>{item.name}</Typography>
      <Typography variant='h6'>{item.description}</Typography>
      <UpdateProject productId={item.id}/>
      <CreateTask productId={item.id}/>
      {tasks && tasks.map((task) => (
          <li key={task.id} style={{listStyle: 'none', margin: 0, padding: 0}}>
            <CardTask task={task} projectId={item.id} onDelete={handleDeleteTask}/>
          </li>
        ))}
    </Box>
  )
}

export default ListDetail
