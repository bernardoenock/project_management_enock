import { useState } from "react";
import { Button } from "@mui/material";
import ModalCreate from "../molecules/ModalCreate";

const CreateProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>Criar Projeto</Button>
      <ModalCreate what="project" open={open} handleClose={handleClose} />
    </>
  );
}

export default CreateProject