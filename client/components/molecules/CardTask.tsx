import React, { useState } from 'react'

import { completeTask, deleteTask } from "../../api/tasks";
import { Checkbox, Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import UpdateTask from '../organisms/UpdateTask';
import Title from '../atoms/contents/Title';
import Description from '../atoms/contents/Description';
import StartDate from '../atoms/contents/StartDate';
import BtnDelete from '../atoms/buttons/BtnDelete';
import WrapperTask from '../atoms/wrappers/WrapperTask';

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
    <WrapperTask>
      <Title>{task.name}</Title>
      <Description>Descrição: {task.description}</Description>
      <StartDate>Data Inicial: {dayjs(task.startdate).format('DD/MM/YYYY')}</StartDate>
      <Checkbox
        checked={checked}
        onChange={handleCompletedTask}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <UpdateTask projectId={projectId} taskId={task.id}/>
      <BtnDelete handleDelete={handleDeleteTask}/>
    </WrapperTask>
  )
}

export default CardTask