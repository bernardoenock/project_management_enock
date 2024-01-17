import { Container, Box, Typography, Button } from "@mui/material"
import LinkApp from "../atoms/contents/LinkApp"

const HomePage = () => {

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
        <Typography variant="h4">Gerencie seus projetos</Typography>
        <Button color="inherit" variant='contained'><LinkApp href="/dashboard">Aqui</LinkApp></Button>
      </Box>
    </Container>
  )
}

export default HomePage