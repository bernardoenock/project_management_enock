import { Button } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch';
import LinkApp from "../contents/LinkApp"

type Props = {
  projectId?: string
}

const BtnOpenProject = ({projectId}: Props) => {
  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<LaunchIcon />}
    >
      <LinkApp href="/dashboard/[id]" as={`/dashboard/${projectId}`} color="white">
        Abrir
      </LinkApp>
    </Button>
  )
}

export default BtnOpenProject