import LinkApp from '../components/atoms/LinkApp'
import Layout from '../components/Layout'
import { Typography, Button, Box, Container} from '@mui/material'

const IndexPage = () => (
  <Layout title="Home | Project Management">
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
  </Layout>
)

export default IndexPage
