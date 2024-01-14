import React, { useState } from 'react'

import { completeTask, deleteTask } from "../../api/tasks";
import { Checkbox, Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import UpdateTask from '../organisms/UpdateTask';

type Props = {
  task: any
  projectId: string
  onDelete: (taskId: string) => void;
}

const CardTask = ({onDelete, projectId, task}: Props) => {

  const [checked, setChecked] = useState(task.completed);

  const handleCompletedTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    const completedTask = async () => {
      const taskCompleted = task
      taskCompleted.completed = event.target.checked
      try {
        await completeTask(projectId, task.id, taskCompleted);
        console.log(`Tarefa concluida com sucesso! status: ${taskCompleted.completed}`);
  
      } catch (error) {
        console.error('Erro ao excluir projeto:', error);
      }
    };

    completedTask()
  };

  const handleDeleteTask = async () => {
    try {
      await deleteTask(projectId, task.id);
      console.log('Tarefa excluída com sucesso!');
      onDelete(task.id);

    } catch (error) {
      console.error('Erro ao excluir Tarefa:', error);
    }
  };

  return (
    <Box
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      width: '20rem',
      height: '100%',
      m: 2,
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >
      <Typography variant="h6" textAlign={"center"} sx={{backgroundColor: "#dfff00"}}>{task.name}</Typography>
      <Typography variant="body1" sx={{width: '100%', height: '100%'}}>Descrição: {task.description}</Typography>
      <Typography variant="body1">Data Inicial: {dayjs(task.startdate).format('DD/MM/YYYY')}</Typography>
      <Checkbox
        checked={checked}
        onChange={handleCompletedTask}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <UpdateTask projectId={projectId} taskId={task.id}/>

      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleDeleteTask}
      >
        Excluir Tarefa
      </Button>
    </Box>

  )
}

export default CardTask