import { Typography, Button, Container, Box } from "@mui/material"
import Link from "next/link"

export default function Home() {
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
        <Typography variant="h4">Gerencie seus projetos</Typography>
        <Button variant="contained">
            <Link href="/dashboard">Aqui</Link>
        </Button>
      </Box>
    </Container>
  )
}
