import Layout from '../../components/Layout'
import ListProjects from '../../components/templates/ListProjects'
import { Typography } from '@mui/material'

const Dashboard = () => (
  <Layout title="Projects">
    <Typography variant="h3" sx={{textAlign: "center"}}>Projects List</Typography>
    <ListProjects />
  </Layout>
)



export default Dashboard
