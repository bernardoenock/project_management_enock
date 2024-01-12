import { GetStaticProps } from 'next'
import { getProjects } from '../../api/projects'
import Layout from '../../components/Layout'
import List from '../../components/List'
import ListProjects from '../../components/ListProjects'

type Props = {
  items: any[]
}

const Dashboard = ({ items }: Props) => (
  <Layout title="Projects">
    <h1>Projects List</h1>
    <List items={items} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: any[] = await getProjects()
  return { props: { items } }
}

export default Dashboard
