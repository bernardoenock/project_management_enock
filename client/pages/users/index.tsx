import { GetStaticProps } from 'next'
import LinkApp from '../../components/atoms/LinkApp'

import { User } from '../../interfaces'
import { sampleUserData } from '../../data/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/ListProjects'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Project Management">
    <h1>Users List</h1>
    <List items={items} />
    <p>
      <LinkApp href="/">Go home</LinkApp>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
