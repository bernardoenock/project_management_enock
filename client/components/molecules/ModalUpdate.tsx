import { useState } from "react";
import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { updateProject } from "../../api/projects";
import { updateTask } from "../../api/tasks";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  what: 'project' | 'task'
  open: boolean
  handleClose: () => void
  projectId: string
  taskId?: string
}

const ModalUpdate = ({ what, open, handleClose, projectId , taskId}: Props) => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs());

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const projectData = {
        name: data.get('name') as string,
        description: data.get('descripition') as string,
        startDate: selectedDate.format('YYYY-MM-DD'),
      };

      if(what === 'project'){
        const response = await updateProject(projectId, projectData);
        console.log('Projeto editado com sucesso:', response);
      } else {
        const response = await updateTask(projectId, taskId, projectData);
        console.log('Tarefa editada com sucesso:', response);
      }


    } catch (error) {
      console.error('Erro ao editar projeto ou tarefa:', error);
    }

    location.reload();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={style}>
        <Typography variant="h4">Editar {what === 'project' ? ('Projeto') : ('Tarefa')}</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label={what === 'project' ? ('Nome do Projeto') : ('Titulo da Tarefa')}
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="descripition"
          label={what === 'project' ? ('Descrição do Projeto') : ('Descrição da Tarefa')}
          name="descripition"
          autoComplete="descripition"
          autoFocus
          multiline
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data de Início"
            value={selectedDate}
            onChange={handleDateChange}
            sx={{width:"100%", mt: 1}}
          />
        </LocalizationProvider>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Editar
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalUpdate;
