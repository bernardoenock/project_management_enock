import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  href?: string
  as?: string
  color?: string
}

const LinkApp = ({children, href, as, color}: Props) => {

  return (
    <Link 
    href={href} 
    as={as}
    style={{
      textDecoration: 'none',
      color: color ? color : 'black'
    }}>{children}</Link>
  )
}

export default LinkApp