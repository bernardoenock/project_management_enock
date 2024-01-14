import { useState } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ModalUpdate from '../molecules/ModalUpdate';

type Props = {
  projectId: string
  taskId: string
}

const UpdateTask = ({ projectId, taskId }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="inherit" onClick={handleOpen} startIcon={<EditIcon/>}>Editar Tarefa</Button>
      <ModalUpdate what="task" open={open} handleClose={handleClose} projectId={projectId} taskId={taskId}/>
    </>
  );
};

export default UpdateTask