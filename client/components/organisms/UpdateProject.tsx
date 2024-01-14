import { useState } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ModalUpdate from '../molecules/ModalUpdate';

type Props = {
  productId: string
}

const UpdateProject = ({ productId }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="inherit" onClick={handleOpen} startIcon={<EditIcon/>}>Editar Projeto</Button>
      <ModalUpdate what="project" open={open} handleClose={handleClose} projectId={productId}/>
    </>
  );
};

export default UpdateProject
