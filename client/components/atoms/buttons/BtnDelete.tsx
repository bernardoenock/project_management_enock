import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  handleDelete?: () => Promise<void>
}


const BtnDelete = ({handleDelete}: Props) => {
  return (
    <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
      Excluir
    </Button>
  )
}

export default BtnDelete