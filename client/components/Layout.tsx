import React, { ReactNode } from 'react'
import Head from 'next/head'
import { ThemeMUI } from '../style'
import Navigation from './organisms/Navigation'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Project Management' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navigation />
    </header>
      <ThemeMUI>
        {children}
      </ThemeMUI>
    <footer>
      <hr />
      <span>Created by <a href="https://github.com/bernardoenock">Enock</a></span>
    </footer>
  </div>
)

export default Layout
