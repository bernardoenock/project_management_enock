import { Typography } from "@mui/material"
import { ReactNode } from "react"


type Props = {
  children?: ReactNode
}

const Title = ({children}: Props) => {
  return (
    <Typography 
      variant="h6" 
      textAlign={"center"} 
      sx={{backgroundColor: "#dfff00"}}>{children}</Typography>
  )
}

export default Title