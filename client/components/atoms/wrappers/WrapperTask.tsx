import { Box } from "@mui/material"
import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const WrapperTask = ({children}: Props) => {

  return (
    <Box
    sx={{
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      width: '20rem',
      height: '100%',
      mt: 2,
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >{children}</Box>
  )
}

export default WrapperTask