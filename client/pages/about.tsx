import LinkApp from '../components/atoms/LinkApp'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Project Management">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <LinkApp href="/">Go home</LinkApp>
    </p>
  </Layout>
)

export default AboutPage
