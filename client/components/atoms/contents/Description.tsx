import { Typography } from "@mui/material"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const Description = ({children}: Props) => {
  return (
    <Typography 
      variant="body1" 
      sx={{width: '100%', height: '100%', ml: 2}}>{children}</Typography>
  )
}

export default Description