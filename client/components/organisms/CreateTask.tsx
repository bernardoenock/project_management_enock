import { useState } from "react";
import { Button } from "@mui/material";
import ModalCreate from "../molecules/ModalCreate";

type Props = {
  productId: string
}

const CreateTask = ({productId}: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    
  };

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>Criar Tarefa</Button>
      <ModalCreate what="task" open={open} handleClose={handleClose} projectId={productId}/>
    </>
  );
}

export default CreateTask