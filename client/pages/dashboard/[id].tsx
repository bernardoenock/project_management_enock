import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import DetailProject from '../../components/templates/DetailProject'
import { getOneProject, getProjects } from '../../api/projects'

type Props = {
  item?: any
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Project Management">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name.replace(/\s/g, '') : 'Project Detail'
      } | Project Management`}
    >
        <>
          <DetailProject />
        </>
    </Layout>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const projects = await getProjects();
    const paths = projects.map((project) => ({
      params: { id: project.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (err) {
    console.error("Error fetching projects:", err);
    return { paths: [], fallback: false };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = await getOneProject(id as string)

    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
