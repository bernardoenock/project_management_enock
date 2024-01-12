import { Container, Box, Typography } from "@mui/material";



export default function Project() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
          }}
        >
        <Typography variant="h4">Projeto: </Typography>
       
      </Box>
    </Container>
  )
}