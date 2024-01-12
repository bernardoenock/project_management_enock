import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
import { sampleUserData } from '../../data/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Project Management">
    <h1>Users List</h1>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
