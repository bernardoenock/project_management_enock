import React from 'react'
import Link from 'next/link'

type Props = {
  data: any
}

const ListItem = ({ data }: Props) => (
  <Link href="/dashboard/[id]" as={`/dashboard/${data.id}`}>
    {data.id}:{data.name}
  </Link>
)

export default ListItem
