import { Typography } from "@mui/material"
import { ReactNode } from "react"


type Props = {
  children?: ReactNode
}

const StartDate = ({children}: Props) => {
  return (
    <Typography variant="body1" sx={{ml: 2}}>{children}</Typography>
  )
}

export default StartDate